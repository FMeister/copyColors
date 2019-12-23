import * as React from "React";
import * as ReactDOM from "react-dom";
import Header from "./header";
import CustomDate from "./customDate";
import CustomList from "./customList";
import ColorButton from "./colorButton";

const colorStrings: string[] = [
    "rgb(237,177,32)",
    "rgb(217, 83, 25)",
    "rgb(0, 114, 189)",
    "#FFFFFF",
    "#EFEFEF",
    "#C2C8CF",
    "#8B939C",
    "#686B73",
    "#434B53",
    "#353D45",
    "#2E363E",

    "#7149A4",
    "#DA6DAD",
    "#CB3F4A",
    "#E76D3B",
    "#D9A321",
    "#83B547",
    "#2CBDA7",
    "#9577DE",
    "#E25F70",
    "#EFC662",
    "#2BBF6D",
    "#2C97DE",

    "#434B53",
    "#666D78",
    "#ABB2BD",
    "#CCD1D8",
    "#E7E9ED",
    "#F5F7FB",
    "#FFFFFF",

    "#D871AC",
    "#EC88C1",
    "#967BDD",
    "#AC92ED",
    "#4A8ADD",
    "#5E9CEB",
    "#3BAFDA",
    "#4EC1E8",
    "#37BC9A",
    "#48CFAD",
    "#8CC051",
    "#A0D467",
    "#F7BB42",
    "#FFCF54",
    "#E95740",
    "#FB6E50",
    "#DA4452",
    "#EC5664",

    "#AEDFDB",
    "#F4D94E",
    "#F38D9B",
    "#21B7A9",
    "#99D45D",
    "#EDEDEF",

    "#8ADFE3",
    "#55C5D1",
    "#4699C2",
    "#FFD57E",
    "#F79C65",
    "#FC8476",

    "#96BDC4",
    "#C2DBDF",
    "#FDD4C1",
    "#EAABBC",
    "#F9E5DA",
    "#B5AFBC",

    "#75FAFF",
    "#79FFC8",
    "#7780FF",
    "#77A1FE",
    "#79B8FF",
    "#77CDFF",
    "#79B8FF",
    "#89C0FF",
    "#6AAFFE",

    "#34495E",
    "#D1D5D8",
    "#5DADE2",
    "#F4D313",
    "#58D68D",
    "#47C9B0",
    "#415B76",
    "#EC7063"
]


ReactDOM.render(
    <div>
        {
            colorStrings.map(
                (value, index) => {
                    return (
                        <ColorButton color={value} key={index}></ColorButton>
                    );
                }
            )
        }
    </div >,
    document.querySelector('#root')
);