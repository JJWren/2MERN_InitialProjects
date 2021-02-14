import React, { useState } from "react";
import { navigate } from "@reach/router";

const SearchForm = () => {
    const [form, setForm] = useState({
        option: "people",
        id: "",
    });

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        // navigate to pathing for App.jsx
        navigate(`/${form.option}/${form.id}`);
    };

    return (
        <div className="text-center">
            <h1>
                <u>Welcome to Luke API-Walker</u>
            </h1>
            <form
                className="d-flex justify-content-around align-items-center col-10 mx-auto"
                onSubmit={submitHandler}
            >
                <div className="d-flex">
                    <label className="m-1">Search for: </label>
                    <select
                        className="rounded"
                        name="option"
                        onChange={onChangeHandler}
                    >
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                    </select>
                </div>
                <div className="d-flex">
                    <label className="m-1">ID: </label>
                    <input
                        type="text"
                        name="id"
                        onChange={onChangeHandler}
                        className="rounded"
                    ></input>
                </div>
                <button class="btn-primary rounded">Search</button>
            </form>
        </div>
    );
};

export default SearchForm;
