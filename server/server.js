const express = require("express");
const path = require("path");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname + "/../build/index.html"));
});

console.log("Server started");

console.log("Listening on localhost:" + PORT);

app.listen(3000);
