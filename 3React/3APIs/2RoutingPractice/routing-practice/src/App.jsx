import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router } from "@reach/router";
import Home from "./components/Home";
import NumberWord from "./components/NumberWord";
import StringColorColor from "./components/StringColorColor";

function App() {
    return (
        <div className="App m-4">
            <Router>
                <Home path="/Home" />
                <NumberWord path="/:thing" />
                <StringColorColor path="/:thing/:textcolor/:bgcolor" />
            </Router>
        </div>
    );
}

export default App;
