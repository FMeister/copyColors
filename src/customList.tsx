import * as React from "react";

function CustomList(props: { items: string[] }) {

    // React.useEffect(() => {
    //     alert("effect call after ini of list");
    // });

    return (
        <ul>
            {
                props.items.map((value, index) => {
                    let colorString: string = "";
                    if (Number(value) % 2) {
                        colorString = "orange";
                    } else {
                        colorString = "blue";
                    }
                    return <li style={{ color: colorString }} key={index}> {value} </li>
                })
            }
        </ul>
    );
}

export default CustomList;