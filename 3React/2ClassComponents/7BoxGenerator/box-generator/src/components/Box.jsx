import react, { useState } from "react";

const Box = (props) => {
    return (
        <div
            className="m-1"
            style={{
                width: props.myBox.size,
                height: props.myBox.size,
                backgroundColor: props.myBox.color,
            }}
        ></div>
    );
};

export default Box;
