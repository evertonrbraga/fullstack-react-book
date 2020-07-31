import React from "react";

import Switch1 from "./steps/Switch1";
import Switch2 from "./steps/Switch2";
import Switch3 from "./steps/Switch3";
import Switch4 from "./steps/Switch4";
import Switch5 from "./steps/Switch5";
import Switch6 from "./steps/Switch6";
import "./Switch.css";

class Switch extends React.Component {
  render() {
    const presentStep = (title, Step) => (
      <div>
        <h2>{title}</h2>
        <Step />
      </div>
    );

    return (
      <div>
        {presentStep("Switch1", Switch1)}
        {presentStep("Switch2", Switch2)}
        {presentStep("Switch3", Switch3)}
        {presentStep("Switch4", Switch4)}
        {presentStep("Switch5", Switch5)}
        {presentStep("Switch6", Switch6)}
      </div>
    );
  }
}

export default Switch;
