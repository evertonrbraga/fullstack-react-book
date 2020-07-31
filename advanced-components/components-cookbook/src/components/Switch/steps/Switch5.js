import React from "react";
import "../Switch.css";

const CREDITCARD = "Creditcard";
const BTC = "Bitcoin";

class Switch extends React.Component {
  state = {
    payMethod: BTC
  };

  select = choice => {
    return evt => {
      this.setState({
        payMethod: choice
      });
    };
  };

  renderChoice = choice => {
    // create a set of cssClasses to apply
    const cssClasses = ["choice"];

    if (this.state.payMethod === choice) {
      cssClasses.push("active"); // add .active class
    }

    return (
      <div className={cssClasses.join(" ")} onClick={this.select(choice)}>
        {choice}
      </div>
    );
  };

  render() {
    return (
      <div className="switch">
        {this.renderChoice(CREDITCARD)}
        {this.renderChoice(BTC)}
        Pay with: {this.state.payMethod}
      </div>
    );
  }
}

export default Switch;
