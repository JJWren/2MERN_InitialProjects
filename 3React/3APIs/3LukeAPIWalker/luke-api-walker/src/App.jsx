import "./App.css";
import { Router } from "@reach/router";
import SearchForm from "./components/SearchForm";
import People from "./components/People.jsx";
import Planets from "./components/Planets.jsx";
import Error from "./components/Error.jsx";

function App() {
    return (
        <div>
            <SearchForm />
            <Router>
                <People path="/people/:id" />
                <Planets path="/planets/:id" />
                <Error path="/error" />
            </Router>
        </div>
    );
}

export default App;
