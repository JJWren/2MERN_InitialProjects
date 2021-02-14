import React from "react";
import obiwan from "../assets/img/obiwan.gif";

const Error = (e) => {
    return (
        <div className="d-flex flex-column justify-content-center">
            <h1 className="m-4 text-center text-danger">Error: 404</h1>
            <h4 className="m-4 text-center text-danger">
                "These aren't the droids you're looking for..."
            </h4>
            <img
                src={obiwan}
                className="col-8 mx-auto"
                alt='Obi Wan saying, "You have done that yourself."'
            />
        </div>
    );
};

export default Error;
