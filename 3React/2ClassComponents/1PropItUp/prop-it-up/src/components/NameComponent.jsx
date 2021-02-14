import React, { Component } from "react";

class NameComponent extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center align-items-center text-left">
                <div className="d-flex flex-column justify-content-start align-items-center border border-info rounded bg-info m-3 p-2 col-3 shadow-lg">
                    <h3 className="m-1 text-center text-light">
                        {this.props.lname}, {this.props.fname}
                    </h3>
                    <div className="d-flex flex-column justify-content-start align-items-center border border-info rounded bg-light">
                        <p className="m-1 text-left mr-auto">Age: {this.props.age}</p>
                        <p className="m-1 text-left">
                            Hair Color: {this.props.hcolor}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default NameComponent;
