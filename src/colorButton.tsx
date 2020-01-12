import * as React from "react";
import * as Color from "color";

type ButtonProps = {
    color: string;
}

function ColorButton(props: ButtonProps) {

    let color = Color(props.color);

    let divStyle = { backgroundColor: props.color};

    let hStyle = {
        color: "white"
    };
    if (color.isLight()) {
        hStyle.color = "black";
    }


    const copyToClipboard = () => {
        const el = document.createElement('textarea');
        el.value = color.toString();
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    };



    return (
        <div className="colorButton" style={divStyle} onClick={copyToClipboard}>
            <h2 style={hStyle}>
                {color.toString()}
            </h2>
        </div >

    );
}

export default ColorButton;