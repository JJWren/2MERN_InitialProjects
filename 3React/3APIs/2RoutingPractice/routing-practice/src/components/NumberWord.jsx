import React from "react";

const NumberWord = (props) => {
    return (
        <div>
            {!isNaN(props.thing) ? (
                <div className="display-3 text-center">
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

export default NumberWord;
