import React from "react";

const Task = (props) => {
    const completedStyle = {
        textDecoration: "line-through",
        color: "lightgrey",
    };
    const incompletedStyle = {
        textDecoration: "none",
        color: "black",
    };

    const checkHandler = () => {
        props.toggle(props.idx);
    };

    const deleteHandler = () => {
        props.remove(props.idx);
    };

    return (
        <div
            className="input-group d-flex align-text-center m-1"
            style={props.myTask.completed ? completedStyle : incompletedStyle}
        >
            <input
                type="checkbox"
                checked={props.myTask.completed}
                onClick={checkHandler}
                className="col-1 align-self-center"
            />
            <p className="col-8 text-left text-wrap">{props.myTask.text}</p>
            <input
                type="submit"
                value="Delete"
                className="col-3 rounded btn-danger"
                onClick={deleteHandler}
            />
        </div>
    );
};

export default Task;
