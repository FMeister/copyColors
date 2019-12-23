"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
function CustomDate() {
    var _a = React.useState(""), date = _a[0], setDate = _a[1];
    var _b = React.useState(), time = _b[0], setTime = _b[1];
    var getDate = function () {
        setDate(new Date().toDateString());
    };
    var getTime = function () {
        setTime(new Date().getSeconds());
    };
    return (React.createElement("div", null,
        date,
        time,
        React.createElement("button", { onClick: getTime }, "Get the Date")));
}
exports.default = CustomDate;
