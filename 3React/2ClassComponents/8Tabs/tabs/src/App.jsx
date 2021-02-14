import "./App.css";
import TabHeader from "./components/TabHeader";
import { useState } from "react";

function App() {
    const [tabs, setTabs] = useState([
        {
            selected: true,
            title: 1,
            content: "content from tab 1",
        },
        {
            selected: false,
            title: 2,
            content: "content from tab 2",
        },
        {
            selected: false,
            title: 3,
            content: "content from tab 3",
        },
    ]);

    const handleClick = (title) => {
        console.log(`you clicked tab # ${title}`);
        tabs.map((tab, i) => {
            let t = tab;
            if (title === t.title) {
                t.selected = true;
            } else {
                t.selected = false;
            }
            setTabs([...tabs.slice(0, i), t].concat(tabs.slice(i + 1)));
        });
    };

    return (
        <div className="d-flex flex-column justify-content-center">
            <div className="d-flex justify-content-start">
                {tabs.map((tab) => {
                    return (
                        <TabHeader
                            selected={tab.selected}
                            title={tab.title}
                            handleClick={handleClick}
                        />
                    );
                })}
            </div>
            <div className="d-flex border col-11 m-1 bg-light shadow">
                {tabs.map((tab) => {
                    return tab.selected ? <p>{tab.content}</p> : "";
                })}
            </div>
        </div>
    );
}

export default App;
