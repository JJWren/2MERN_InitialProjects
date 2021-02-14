import React from "react";

const NameComponent = props => {
    return (
        <div className="d-flex justify-content-center align-items-center text-left">
            <div className="d-flex flex-column justify-content-center align-items-center text-left border border-info col-6 m-1 rounded bg-dark">
                <div className="d-flex flex-column justify-content-start align-items-center border rounded bg-info m-3 p-2 col-12">
                    <h3 className="m-1 text-center text-light">
                        {props.lname}, {props.fname}
                    </h3>
                    <div className="d-flex flex-column justify-content-start align-items-center border border-info rounded bg-light border-dark">
                        <p className="m-1 text-left mr-auto">Age: {props.age}</p>
                        <p className="m-1 text-left">
                            Hair Color: {props.hcolor}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NameComponent;
