import React from "react";
import "./Ball.css"

const Ball = ({ handleClick, excuse }) => {
  return (
    <div className="Ball" onClick={handleClick}>
        <h1>8</h1>
      <div>{excuse}</div>
    </div>
  );
};

export default Ball;
