const fs = require("fs");

console.log("Before readFile");

fs.readFile("a.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

console.log("After readFile");
