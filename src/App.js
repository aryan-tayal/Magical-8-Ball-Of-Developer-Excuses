import React, { useState } from "react";
import excuses from "excuses";
import Ball from "./Ball";
import CurvedText from "./CurvedText";
import animate from './animations'
import "./App.css";

const App = () => {
  const randomExcuse = () => excuses.developers.getRandom();
  const handleBallClick = () => {
    setExcuse(randomExcuse());
    animate();
  }
  const [excuse, setExcuse] = useState(randomExcuse());
  return (
    <div className="App">
      <CurvedText text="Magical Ball" />
      <Ball excuse={excuse} handleClick={handleBallClick} />
      <CurvedText text="Of Excuses" dir={-1} />
      <p className="App-description animate-down">
        Never do your developer work again and get out of anything with an iron
        clad excuse. Click the ball to get your excuse.
      </p>
      <div className="App-bg"></div>
      <p className="App-opentext">Here is your developer excuse</p>
    </div>
  );
};

export default App;
