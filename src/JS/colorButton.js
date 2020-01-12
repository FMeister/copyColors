"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Color = require("color");
function ColorButton(props) {
    var color = Color(props.color);
    var divStyle = { backgroundColor: props.color };
    var hStyle = {
        color: "white"
    };
    if (color.isLight()) {
        hStyle.color = "black";
    }
    var copyToClipboard = function () {
        var el = document.createElement('textarea');
        el.value = color.toString();
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    };
    return (React.createElement("div", { className: "colorButton", style: divStyle, onClick: copyToClipboard },
        React.createElement("h2", { style: hStyle }, color.toString())));
}
exports.default = ColorButton;
