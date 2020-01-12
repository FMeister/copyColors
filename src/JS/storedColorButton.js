"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
function StoredColorButton(props) {
    var divStyle = {
        backgroundColor: props.color
    };
    var hStyle = {
        color: "black",
        textAlign: "center",
        paddingBottom: "10px"
    };
    return (React.createElement("div", null,
        React.createElement("h2", { style: hStyle }, props.text),
        React.createElement("div", { className: "colorButton", style: divStyle })));
}
exports.default = StoredColorButton;
