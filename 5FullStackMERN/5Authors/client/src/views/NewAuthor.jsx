import { navigate } from "@reach/router";
import axios from "axios";
import React, { useState } from "react";
import Form from "../components/Form";

const NewAuthor = (props) => {
    const [form, setForm] = useState({
        name: "",
        quote: "",
    });

    const [error, setError] = useState({});

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
            .post("http://localhost:8000/api/authors/create", form)
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
            <h3>Add an Author:</h3>
            <Form
                form={form}
                onChangeHandler={onChangeHandler}
                onSubmitHandler={onSubmitHandler}
                error={error}
            />
        </div>
    );
};

export default NewAuthor;
