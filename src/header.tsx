import * as React from "react";

function Header(props: { text: string; }) {
    return (
        <div>
            <h1> Hi, steve {props.text}</h1>
        </div>
    );
}

export default Header;