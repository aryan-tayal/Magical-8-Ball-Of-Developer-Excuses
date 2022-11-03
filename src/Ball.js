import React from "react";

const Ball = ({ handleClick, excuse }) => {
  return (
    <div className="Ball" onClick={handleClick}>
      <p>{excuse}</p>
    </div>
  );
};

export default Ball;
