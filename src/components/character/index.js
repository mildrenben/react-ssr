import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const attributes = [
  "height",
  "skin_color",
  "eye_color",
  "birth_year",
  "gender"
];

const Character = props => (
  <div className="character">
    <h2 className="character-name">{props.name}</h2>
    <ul className="attribute-list">
      {attributes.map(attribute => (
        <li className="attribute">
          <span className="attribute-title">{attribute.replace("_", " ")}</span>
          <span className="attribute-value">{props[attribute]}</span>
        </li>
      ))}
    </ul>
  </div>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  hair_color: PropTypes.string.isRequired,
  skin_color: PropTypes.string.isRequired,
  eye_color: PropTypes.string.isRequired,
  birth_year: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired
};

export default Character;
