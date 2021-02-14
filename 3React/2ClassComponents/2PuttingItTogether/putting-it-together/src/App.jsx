import React from "react";
import "./App.css";
import NameComponent from "./components/NameComponent";

function App() {
    return (
        <div className="App">
            <NameComponent lname="Doe" fname="Jane" age={45} hcolor="Black" />
            <NameComponent lname="Smith" fname="John" age={88} hcolor="Brown" />
            <NameComponent lname="Fillmore" fname="Millard" age={50} hcolor="Brown" />
        </div>
    );
}

export default App;
