import { useEffect, useState } from "react";
import "./App.css";
import PokeAPIFetch from "./components/PokeAPIFetch";

function App() {
    return (
        <div className="d-flex flex-column">
            <PokeAPIFetch />
        </div>
    );
}

export default App;
