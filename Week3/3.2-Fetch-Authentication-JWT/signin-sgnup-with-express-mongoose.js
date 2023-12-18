const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";

mongoose.connect(
  "mongodb+srv://sanket:Cyclo%403090@cluster0.aafpcln.mongodb.net/userappnew"
);

const User = mongoose.model("User", {
  username: String,
  email: String,
  password: String,
});

const app = express();
app.use(express.json());

async function userExists(username, password) {
  try {
    const data = await User.findOne({ username: username });
    if (data) return true;
    else return false;
  } catch (err) {
    console.error(err);
    return false; // Handle errors appropriately
  }
}

app.post("/signin", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

  //   const userExists = await User.findOne({ email: email });
  //   if (userExists) {
  //     var token = jwt.sign({ username: username }, "shhhhh");
  //     return res.json({
  //       token,
  //     });
  //   } else {
  //     return res.status(403).json({
  //       msg: "User doesnt exist in  db",
  //     });
  //   }

  if (!userExists(username, password)) {
    console.log("from sigup" + userExists(username, password));
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", async function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;

    const users = await User.find({ username: { $ne: username } });

    return res.status(200).json(users);
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000, () => {
  console.log("Server Running on PORT 3000 !");
});
