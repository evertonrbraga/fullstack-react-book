import React from "react";
import "../Switch.css";

const CREDITCARD = "Creditcard";
const BTC = "Bitcoin";

const Choice = ({ active, onClick, label }) => {
  const cssClasses = ["choice"];

  if (active) {
    // <-- check props, not state
    cssClasses.push("active");
  }

  return (
    <div className={cssClasses.join(" ")} onClick={onClick}>
      {label} {/* <-- allow any label */}
    </div>
  );
};

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

  render() {
    return (
      <div className="switch">
        <Choice
          onClick={this.select(CREDITCARD)}
          active={this.state.payMethod === CREDITCARD}
          label="Pay with Creditcard"
        />
        <Choice
          onClick={this.select(BTC)}
          active={this.state.payMethod === BTC}
          label="Pay with Bitcoin"
        />
        Paying with: {this.state.payMethod}
      </div>
    );
  }
}

export default Switch;
