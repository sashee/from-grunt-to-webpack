"use strict";

import React from "react";

export default class Component extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }

  increaseCounter = (i) => {
    this.setState({ counter: this.state.counter + 1 });
  }

  resetCounter = (i) => {
    this.setState({ counter: 0 });
  }

  render() {
    return (
      <div className="component">
        <h1>{this.state.counter}</h1>
        <button onClick={() => this.increaseCounter()}>
          Increment counter
        </button>
        <button onClick={() => this.resetCounter()}>
          Reset counter
        </button>
      </div>
    );
  }
}
