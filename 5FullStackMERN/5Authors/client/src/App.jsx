import "./App.css";
import Main from "./views/Main";
import OneAuthor from "./views/OneAuthor";
import NewAuthor from "./views/NewAuthor";
import UpdateAuthor from "./views/UpdateAuthor";
import NotFound from "./views/NotFound";
import { Router, Link } from "@reach/router";

function App() {
    return (
        <div className="App">
            <div className="jumbotron">
                <h1>Favorite Authors</h1>
                <div className="d-flex justify-content-around">
                    <Link to="/">
                        <h4>Home</h4>
                    </Link>
                    <Link to="/authors/new">
                        <h4>Create</h4>
                    </Link>
                </div>
            </div>
            <Router>
                <Main path="/" />
                <OneAuthor path="authors/:_id" />
                <NewAuthor path="authors/new" />
                <UpdateAuthor path="authors/:_id/edit" />
                <NotFound default />
            </Router>
        </div>
    );
}

export default App;
