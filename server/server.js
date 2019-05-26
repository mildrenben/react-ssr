require("ignore-styles");
require("@babel/register")({
  ignore: [/(node_modules)/],
  presets: ["@babel/preset-env", "@babel/preset-react"]
});
const express = require("express");
const path = require("path");
const template = require("./template.js");
const fs = require("fs");
const app = express();

const PORT = 3000;

const router = express.Router();

// homepage
router.use("^/$", (req, res, next) => {
  template(res);
});

// serve static files
router.use(express.static(path.join(__dirname + "/../build/")));

app.use(router);

console.log("Server started");

console.log("Listening on localhost:" + PORT);

app.listen(3000);
