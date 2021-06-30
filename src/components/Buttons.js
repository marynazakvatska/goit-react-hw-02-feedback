import React from "react";

const Buttons = ({ onGoodInc, onNeutralInc, onBadInc }) => (
  <div>
    <button type="button" onClick={onGoodInc}>
      Good
    </button>
    <button type="button" onClick={onNeutralInc}>
      Neutral
    </button>
    <button type="button" onClick={onBadInc}>
      Bad
    </button>
  </div>
);

export default Buttons;
