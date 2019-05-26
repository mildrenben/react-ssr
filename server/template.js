const React = require("react");
const ReactDOMServer = require("react-dom/server");
const fs = require("fs");
const path = require("path");
const ReactApp = require("../src/App.js").default;

const Foo = () => (
  <div>
    <b>fghiugfiudughfhiu</b>
  </div>
);

module.exports = res =>
  fs.readFile(
    path.join(__dirname + "/../build/index.html"),
    "utf-8",
    (err, data) => {
      data.replace(
        '<div id="root"></div>',
        ReactDOMServer.renderToString(<ReactApp />)
      );
      res.send(data);
    }
  );
