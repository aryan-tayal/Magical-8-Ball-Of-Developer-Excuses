import React, { useState } from "react";
import excuses from "excuses";
import Ball from "./Ball";
import "./App.css";

const App = () => {
  const randomExcuse = () => excuses.developers.getRandom();
  const handleBallClick = () => setExcuse(randomExcuse());

  const [excuse, setExcuse] = useState(randomExcuse());
  return (
    <div className="App">
      <h2 className="App-heading">Magical Ball</h2>
      <Ball excuse={excuse} handleClick={handleBallClick} />
      <h2 className="App-heading">Of Excuses</h2>
      <p className="App-description">
        Never do your developer work again and get out of anything with an iron
        clad excuse. Click the ball to get your excuse.
      </p>
    </div>
  );
};

export default App;
