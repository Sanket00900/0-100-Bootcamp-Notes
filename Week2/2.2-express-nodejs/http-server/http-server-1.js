const express = require("express");
const PORT = 3000;

const app = express();

/*
? Syntax
app.get("/route-handler", (req, res) => {
    req: Headers, body, query parameters
    res : send a response
})
*/

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`App running on PORT ${PORT}`);
});
