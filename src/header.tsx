import * as React from "react";

type HeaderProps = {
    text: string;
}

function Header(props: HeaderProps) {

    return (
        <div>
            <h1 className="header"> Hi, {props.text}</h1>
        </div >
    );
}

export default Header;