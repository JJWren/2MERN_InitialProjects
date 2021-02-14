import React from "react";

const TabHeader = (props) => {
    const selectedStyle = {
        backgroundColor: "black",
        color: "white",
    };
    const unselectedStyle = {
        backgroundColor: "white",
        color: "black",
    };

    return (
        <div
            className="m-1 p-1 px-3 border border-secondary col-3 text-center shadow"
            style={props.selected ? selectedStyle : unselectedStyle}
            onClick={() => props.handleClick(props.title)}
        >
            Tab {props.title}
        </div>
    );
};
export default TabHeader;
