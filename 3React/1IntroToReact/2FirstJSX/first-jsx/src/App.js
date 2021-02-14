import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div class="d-flex justify-content-start flex-column text-left">
                    <h1>Hello Dojo!</h1>
                    <h3>Things I need to do:</h3>
                    <ul class="list-group">
                        <li class="list-group-item text-info">Learn React</li>
                        <li class="list-group-item text-info">Climb Mt. Everest</li>
                        <li class="list-group-item text-info">Run a Marathon</li>
                        <li class="list-group-item text-info">Feed the Dogs</li>
                    </ul>
                </div>
            </header>
        </div>
    );
}

export default App;
