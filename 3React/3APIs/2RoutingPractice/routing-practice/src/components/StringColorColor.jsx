import React from "react";

const StringColorColor = (props) => {
    return (
        <div>
            {!isNaN(props.thing) ? (
                <div
                    className="display-3 text-center"
                    style={{
                        color: props.textcolor,
                        backgroundColor: props.bgcolor,
                    }}
                >
                    The number is: {props.thing}
                </div>
            ) : (
                <div className="display-3 text-center">
                    The word is: {props.thing}
                </div>
            )}
        </div>
    );
};

export default StringColorColor;
