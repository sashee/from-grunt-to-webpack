"use strict";

import React from "react";

export default class Component extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }

  handleClick(i) {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return (
      <div className="component">
        <h1>{this.state.counter}</h1>
        <button onClick={() => this.handleClick("bob")}>
          Increment counter
        </button>
      </div>
    );
  }
}
