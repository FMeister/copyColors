"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
function CustomList(props) {
    // React.useEffect(() => {
    //     alert("effect call after ini of list");
    // });
    return (React.createElement("ul", null, props.items.map(function (value, index) {
        var colorString = "";
        if (Number(value) % 2) {
            colorString = "orange";
        }
        else {
            colorString = "blue";
        }
        return React.createElement("li", { style: { color: colorString }, key: index },
            " ",
            value,
            " ");
    })));
}
exports.default = CustomList;
