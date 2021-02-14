import './App.css';
import Main from "./views/Main";
import OnePirate from "./views/OnePirate";
import NewPirate from "./views/NewPirate";
import { Router, Link } from "@reach/router";

function App() {
  return (
    <div className="App">
      <div className="col-4 mr-auto">
        <Link to="/">View Thy Scallywags!</Link>
      </div>
      <Router>
        <Main path="/" />
        <OnePirate path="/pirate/:_id" />
        <NewPirate path="/pirate/new" />
      </Router>
    </div>
  );
}

export default App;
