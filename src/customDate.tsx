import *  as React from "react";

function CustomDate() {

    const [date, setDate] = React.useState("");

    const [time, setTime] = React.useState();

    let getDate = () => {
        setDate(new Date().toDateString());
    }

    let getTime = () => {
        setTime(new Date().getSeconds());
    }

    return (
        <div>
            {date}
            {time}
            <button onClick={getTime}>Get the Date</button>
        </div>
    )
}

export default CustomDate;