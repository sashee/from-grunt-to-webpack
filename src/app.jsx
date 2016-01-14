"use strict";

require("./style.css");

import React from "react";
import ReactDOM from "react-dom";
import Component from "./Component.jsx";

window.addEventListener("load", () => {
	ReactDOM.render(<Component/>, document.getElementById("main"));
});

