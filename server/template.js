const React = require("react");
const ReactDOMServer = require("react-dom/server");
const fs = require("fs");
const path = require("path");
const ReactApp = require("../src/App.js").default;
const axios = require("axios");

module.exports = res => {
  // API data call (wasnt sure if this was meant to be server side or client side,
  // if it was meant to be client side, it would be east enought to move to an onMount call
  // and show a loader whilst the client waits for the data
  axios
    .get("https://swapi.co/api/people/1")
    .then(starWarsResponse => starWarsResponse.data)
    .then(starWarsData => {
      // Renders the react code before sending
      fs.readFile(
        path.join(__dirname + "/../build/index.html"),
        "utf-8",
        (err, data) => {
          data.replace(
            '<div id="root"></div>',
            ReactDOMServer.renderToString(<ReactApp data={starWarsData} />)
          );
          res.send(data);
        }
      );
    });
};
