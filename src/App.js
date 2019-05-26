import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Header from "./components/Header";
import Character from "./components/Character";
import "./App.css";

const App = ({ data }) => (
  <div>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Karla&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <Header />
    <div className="character-wrap">
      {data.results.map(character => (
        <Character {...character} />
      ))}
    </div>
  </div>
);

App.propTypes = {
  data: PropTypes.object.isRequired
};

export default App;
