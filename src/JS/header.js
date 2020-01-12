"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
function Header(props) {
    return (React.createElement("div", null,
        React.createElement("h1", { className: "header" }, props.text)));
}
exports.default = Header;
