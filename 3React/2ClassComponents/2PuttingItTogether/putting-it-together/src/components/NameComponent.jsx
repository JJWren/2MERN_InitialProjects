import React, { Component } from "react";

class NameComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age,
        }
    }

    addToAge = () => {
        this.state.age += 1
        this.setState({age: this.state.age});
    }

    render() {
        return (
            <div className="d-flex justify-content-center align-items-center text-left">
                <div className="d-flex flex-column justify-content-center align-items-center text-left border border-info col-6 m-1 rounded">
                    <div className="d-flex flex-column justify-content-start align-items-center border border-info rounded bg-info m-3 p-2 col-12">
                        <h3 className="m-1 text-center text-light">
                            {this.props.lname}, {this.props.fname}
                        </h3>
                        <div className="d-flex flex-column justify-content-start align-items-center border border-info rounded bg-light">
                            <p className="m-1 text-left mr-auto">Age: {this.state.age}</p>
                            <p className="m-1 text-left">
                                Hair Color: {this.props.hcolor}
                            </p>
                        </div>
                    </div>
                    <button className="text-center mx-auto col-4 mb-3 p-1 rounded btn-secondary" onClick={this.addToAge}><small>Birthday!</small></button>
                </div>
            </div>
        );
    }
}

export default NameComponent;
