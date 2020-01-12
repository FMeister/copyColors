import * as React from "react";
import * as Color from "color";


type ButtonProps = {
    color: string;
    text: string;
}

function StoredColorButton(props: ButtonProps) {

    let divStyle = {
        backgroundColor: props.color
    };

    let hStyle = {
        color: "black",
        textAlign: "center",
        paddingBottom: "10px"
    };


    return (
        <div>
            <h2 style={hStyle}>
                {props.text}
            </h2>
            <div className="colorButton" style={divStyle}>

            </div >
        </div>
    );
}

export default StoredColorButton;