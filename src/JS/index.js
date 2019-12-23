"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("React");
var ReactDOM = require("react-dom");
var header_1 = require("./header");
var customDate_1 = require("./customDate");
var customList_1 = require("./customList");
var items = ["1", "2", "3", "4", "5"];
ReactDOM.render(React.createElement("div", null,
    React.createElement(header_1.default, { text: "steve" }),
    React.createElement(header_1.default, { text: "john" }),
    React.createElement(customDate_1.default, null),
    React.createElement(customList_1.default, { items: items }),
    React.createElement("h1", null, " This is my first react component ")), document.querySelector('#root'));
