// Presentational component (how it looks!)
import React from "react";
import { styles } from "../styles";

const images = {
  copycat:
    "https://content.codecademy.com/courses/React/react_photo_copycat.png",
  quietcat:
    "https://content.codecademy.com/courses/React/react_photo_quietcat.png",
};

export class CopyCat extends React.Component {
  render() {
    const { copying, toggleTape, value, handleChange } = this.props; // destructuring

    return (
      <div style={styles.divStyles}>
        <h1 style={{ marginBottom: "80px" }}>Copy Cat</h1>
        <input type="text" value={value} onChange={handleChange} />
        <img
          style={styles.imgStyles}
          alt="cat"
          src={copying ? images.copycat : images.quietcat}
          onClick={toggleTape}
        />
        <p>{copying && value}</p>
      </div>
    );
  }
}
