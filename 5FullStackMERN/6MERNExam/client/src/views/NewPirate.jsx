import { navigate, Link } from "@reach/router";
import axios from "axios";
import React, { useState } from "react";
import PirateForm from "../components/PirateForm";

const NewPirate = (props) => {
    const [form, setForm] = useState({
        name: "",
        imageURL: "",
        treasureChests: 0,
        catchPhrase: "",
        crewPosition: "",
        hasPegLeg: true,
        hasEyePatch: true,
        hasHookHand: true,
    });

    const [error, setError] = useState({});

    const checkHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.checked,
        });
    };

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
            .post("http://localhost:8000/api/pirate/new", form)
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
            <div className="text-center">
                <h1>Add Pirate</h1>
                <Link to="/" className="btn btn-primary shadow">
                    Crew Board
                </Link>
            </div>
            <PirateForm
                form={form}
                checkHandler={checkHandler}
                onChangeHandler={onChangeHandler}
                onSubmitHandler={onSubmitHandler}
                error={error}
            />
        </div>
    );
};

export default NewPirate;
