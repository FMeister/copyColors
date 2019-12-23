"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Color = require("color");
function ColorButton(props) {
    var c = Color(props.color);
    var divStyle = { backgroundColor: props.color };
    var hStyle = {
        color: "white"
    };
    if (c.isLight()) {
        hStyle.color = "black";
    }
    var copyToClipboard = function () {
        var el = document.createElement('textarea');
        el.value = c.toString();
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    };
    return (React.createElement("div", { style: divStyle, onClick: copyToClipboard },
        React.createElement("h2", { style: hStyle }, c.toString())));
}
exports.default = ColorButton;
