"use strict";

import React from "react";

export default React.createClass({
	getInitialState() {
		return {counter: 0};
	},
	inc() {
		this.setState({counter: this.state.counter + 1});
	},
	render() {
		return (
			<div className="component">
				Counter: {this.state.counter}
				<button onClick={this.inc}>Increment counter</button>
			</div>
		);
	}
});
