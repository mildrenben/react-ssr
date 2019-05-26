const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("helloworld"));

console.log("LISTENING ON 3000");

app.listen(3000);
