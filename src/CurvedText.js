import React, { memo } from "react";
import ArcText from "arc-text";

const CurvedText = ({ text, dir }) => {
  return (
    <h2
      className="App-heading"
      ref={(ref) => {
        const arcText = new ArcText(ref);
        arcText.arc(250);
        arcText.direction(dir);
      }}
    >
      {text}
    </h2>
  );
};

export default memo(CurvedText);