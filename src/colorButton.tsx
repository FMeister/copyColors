import * as React from "react";
import * as Color from "color";

type ButtonProps = {
    color: string;
}

function ColorButton(props: ButtonProps) {

    let c = Color(props.color);

    let divStyle = { backgroundColor: props.color };

    let hStyle = {
        color: "white"
    };
    if (c.isLight()) {
        hStyle.color = "black";
    }


    const copyToClipboard = () => {
        const el = document.createElement('textarea');
        el.value = c.toString();
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    };



    return (
        <div style={divStyle} onClick={copyToClipboard}>
            <h2 style={hStyle}>
                {c.toString()}
            </h2>
        </div >

    );
}

export default ColorButton;