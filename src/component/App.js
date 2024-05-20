import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import './App.css';

export default class App extends React.Component {
  state = {
    cur: null,
    last: null,
    operation: null,
    appendMode: false,
  };

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    return (
      <div className="component-app">
        <Display value={this.state.cur || "0"} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
