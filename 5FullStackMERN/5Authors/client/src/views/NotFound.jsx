import React from "react";
import { Link } from "@reach/router";

const NotFound = (props) => {
    return (
        <div>
            <h1 className="Display-1 alert-danger text-danger">Error 404</h1>
            <h5 className="col-10 mx-auto">
                We're sorry, the page you have requested could not be found.
                Please go back to the homepage or try using one of the links
                above.
            </h5>
        </div>
    );
};

export default NotFound;
