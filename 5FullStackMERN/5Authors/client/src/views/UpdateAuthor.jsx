import { navigate, Link } from "@reach/router";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Form from "../components/Form";

const UpdateAuthor = (props) => {
    const [form, setForm] = useState({
        name: "",
        quote: "",
    });

    const [error, setError] = useState({});

    // This useEffect() is to have the form bring in the previous author's information
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/authors/view/${props._id}`)
            .then((res) => setForm(res.data.author))
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const onChangeHandler = (e) => {
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:8000/api/authors/update/${props._id}`, form)
            .then((res) => {
                if (res.data.error) {
                    console.log(res.data.error.errors);
                    setError(res.data.error.errors);
                } else {
                    console.log("Form information submitted");
                    navigate("/");
                }
            })
            .catch(
                console.log("Something went wrong during form submission...")
            );
    };

    return (
        <div>
            {form ? (
                <div>
                    <h3>Please Update Info:</h3>
                    <Form
                        form={form}
                        onChangeHandler={onChangeHandler}
                        onSubmitHandler={onSubmitHandler}
                        error={error}
                    />
                </div>
            ) : (
                <div>
                    <h1 className="Display-1 alert-danger text-danger">
                        Error 404
                    </h1>
                    <h5 className="col-10 mx-auto">Author doesn't exist...</h5>
                    <h5>
                        <Link to="/authors/new">Click here</Link> if you would
                        like to add one!
                    </h5>
                </div>
            )}
        </div>
    );
};

export default UpdateAuthor;
