import * as React from "React";
import * as ReactDOM from "react-dom";
import Header from "./header";
import CustomDate from "./customDate";
import CustomList from "./customList";

const items: string[] = ["1", "2", "3", "4", "5"];

ReactDOM.render(
    <div>
        <Header text="steve"></Header>
        <Header text="john"></Header>

        <CustomDate></CustomDate>

        <CustomList items={items}></CustomList>

        <h1> This is my first react component </h1>
    </div >,
    document.querySelector('#root')
);