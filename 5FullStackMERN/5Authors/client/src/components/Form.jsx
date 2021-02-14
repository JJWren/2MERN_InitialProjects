import React from "react";

const Form = (props) => {
    return (
        <div className="col-8 mx-auto">
            <form onSubmit={props.onSubmitHandler}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        onChange={props.onChangeHandler}
                        value={props.form.name}
                    />
                    {props.error.name ? (
                        <span className="alert text-danger">
                            {props.error.name.message}
                        </span>
                    ) : (
                        ""
                    )}
                </div>
                <div className="form-group">
                    <label>Quote</label>
                    <input
                        type="text"
                        name="quote"
                        className="form-control"
                        onChange={props.onChangeHandler}
                        value={props.form.quote}
                    />
                    {props.error.name ? (
                        <span className="alert text-danger">
                            {props.error.quote.message}
                        </span>
                    ) : (
                        ""
                    )}
                </div>
                <input
                    type="submit"
                    value="Submit"
                    className="btn-primary rounded shadow"
                />
            </form>
        </div>
    );
};

export default Form;
