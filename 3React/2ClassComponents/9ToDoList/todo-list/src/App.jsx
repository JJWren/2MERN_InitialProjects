import "./App.css";
import { useState } from "react";
import Task from "./components/Task";
import AddTaskForm from "./components/AddTaskForm";

function App() {
    const [tasks, setTasks] = useState([]);

    const addTask = (t) => {
        // take in previous tasks via spread (...)
        // t = task that is being added in from component
        setTasks([...tasks, t]);
    };

    const completedTask = (idx) => {
        let t = tasks[idx];
        t.completed = !t.completed;
        setTasks([...tasks.slice(0, idx), t].concat(tasks.slice(idx + 1)));
    };

    const deleteHandler = (idx) => {
        let t = tasks[idx];
        setTasks([...tasks.filter((task) => task !== t)]);
    };

    const timeElapsed = Date.now();
    const today = new Date(timeElapsed).toDateString();

    return (
        <div className="text-center">
            <h1 className="m-3">
                <u>{today}</u>
            </h1>
            <h2>ToDo List</h2>
            <div className="d-flex flex-column mx-auto my-1 col-10 border border-secondary rounded shadow p-2">
                <AddTaskForm myForm={addTask} />
                {tasks.map((task, i) => {
                    return (
                        <Task
                            myTask={task}
                            idx={i}
                            toggle={completedTask}
                            remove={deleteHandler}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default App;
