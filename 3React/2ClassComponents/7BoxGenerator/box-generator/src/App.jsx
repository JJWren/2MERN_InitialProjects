import "./App.css";
import Box from "./components/Box";
import { useState } from "react";

function App() {
    const [box, setBox] = useState([]);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setBox([
            ...box,
            {
                color: color,
                size: size,
            },
        ]);
    };

    return (
        <div className="d-flex flex-column justify-content-center">
            <form
                className="d-flex flex-column justify-content-center border border-dark bg-info"
                onSubmit={onSubmitHandler}
            >
                <div className="input-group d-flex justify-content-center m-4">
                    <div className="col-1"></div>

                    <label className="text-center text-light my-auto font-weight-bold p-1 col-1">
                        Color
                    </label>

                    <div className="col-1"></div>

                    <input
                        type="text"
                        name="color"
                        className="rounded col-6"
                        onChange={(e) => {
                            setColor(e.target.value);
                        }}
                        value={color}
                    ></input>

                    <div className="col-3"></div>
                </div>
                <div className="input-group d-flex justify-content-center m-4">
                    <div className="col-1"></div>

                    <label className="text-center text-light my-auto font-weight-bold p-1 col-1">
                        Size
                    </label>

                    <div className="col-1"></div>

                    <select
                        name="size"
                        className="border-dark rounded col-6"
                        onChange={(e) => {
                            setSize(e.target.value);
                        }}
                        value={size}
                    >
                        <option>25px</option>
                        <option>50px</option>
                        <option>100px</option>
                        <option>200px</option>
                        <option>300px</option>
                        <option>400px</option>
                        <option>500px</option>
                        <option>600px</option>
                        <option>700px</option>
                        <option>800px</option>
                    </select>

                    <div className="col-1"></div>

                    <input
                        type="submit"
                        className="btn border-dark shadow col-1 bg-light"
                        value="Add"
                    ></input>

                    <div className="col-1"></div>
                </div>
            </form>
            <div className="d-flex flex-wrap">
                {box.map((item) => {
                    return <Box myBox={item} />;
                })}
            </div>
        </div>
    );
}

export default App;
