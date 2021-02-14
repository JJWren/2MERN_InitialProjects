import React, { useState } from "react";

const AddTaskForm = (props) => {
    const [task, setTask] = useState({});
    const [text, setText] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setTask({
            completed: false,
            text: text,
        });
        props.myForm(task);
    };

    return (
        <form
            className="form-group d-flex border border-secondary rounded p-2 shadow"
            onSubmit={onSubmitHandler}
        >
            <label className="input-group-text col-4">Add Task:</label>
            <input
                type="text"
                value={text}
                onChange={(e) => {
                    setText(e.target.value);
                }}
                className="form-control col-6 mr-auto"
            ></input>
            <input
                type="submit"
                value="Add"
                className="btn btn-light border rounded shadow-sm col-2"
            ></input>
        </form>
    );
};

export default AddTaskForm;
