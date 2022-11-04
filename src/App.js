import React, { useState } from "react";
import gsap from "gsap";
import excuses from "excuses";
import Ball from "./Ball";
import CurvedText from "./CurvedText";
import "./App.css";

const App = () => {
  const randomExcuse = () => excuses.developers.getRandom();
  const handleBallClick = () => {
    setExcuse(randomExcuse());
    const timeline = gsap.timeline({ defaults: { duration: 0.2 } });
    timeline
      .to(".Ball", {
        x: -40,
      })
      .to(".Ball", {
        x: 40,
      })
      .to(".Ball", {
        x: -30,
      })
      .to(".Ball", {
        x: 30,
      })
      .to(".Ball", {
        x: -20,
      })
      .to(".Ball", {
        x: 20,
      })
      .to(".Ball", {
        x: -10,
      })
      .to(".Ball", {
        x: 10,
      });
    const backgroundTimeline = gsap.timeline();
    backgroundTimeline
      .to(".animate-down", {
        y: 500,
        stagger: 0.15,
      })
      .to(
        ".animate-up",
        {
          y: -500,
        },
        "=-0.3"
      )
      .to(".App-bg", {
        "--o": 200,
      })
      .to(
        ".App-bg",
        {
          "--wh": 200,
        },
        "=-0.3"
      )
      .to(".App-bg", {
        y: -500,
      })
      .to(".App-opentext", {
        y: 0,
      });
    const ballTimeline = gsap.timeline();
    ballTimeline
      .to(".Ball", {
        height: "800px",
        width: "800px",
        y: 200,
      })
      .to(
        ".Ball > h1",
        {
          y: -500,
          position: "absolute",
        },
        "=-0.5"
      )
      .to(".Ball > div", {
        display: "flex",
        opacity: 1,
        y: 0,
      });
  };

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
