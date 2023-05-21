const express = require("express");
const app = express();
const fs = require("fs");
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello Node!!!!</h1>\n");
});

fs.writeFile("welcome.js", "Hello world", (err) => {
  if (err) console.error("Error writing to file", err);
  else console.log("File created and data written successfully!");
});

fs.readFile("welcome.js", "utf8", (err, data) => {
  if (err) console.error("Error reading file:", err);
  else console.log("File content:", data);
});

app.listen(port, () => {
  console.log("server is running on 3000");
});
