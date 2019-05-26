import React from "react";
import PropTypes from "prop-types";
import Character from "./components/Character";
import "./App.css";

const App = ({ data }) => (
  <div>
    {data.results.map(character => (
      <Character {...character} />
    ))}
  </div>
);

App.propTypes = {
  data: PropTypes.object.isRequired
};

export default App;
