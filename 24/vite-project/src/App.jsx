import React, { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button } from "./components/Button";
import { tabsData } from "./data";

export const App = () => {
  // const [counter, setCouner] = useState([{id: 1, counter: 0, img: ''}]);

  const [tabId, setTabId] = useState("tab1");
  const [posts, setPosts] = useState([]);
  console.log(tabsData[tabId]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      console.log(data);
      return data;
    };

    if (tabId === "tab2") {
      getData().then((data) => setPosts(data));
    }
  }, [tabId]);

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt={"logo"} />
        </a>
      </div>
      <h1>Vite + React</h1>

      <ul>
        {posts.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>

      <div
        className="wrapper"
        onClick={(event) => console.log("event wrapper")}
      >
        <p
          onClick={(event) => {
            event.stopPropagation();
            console.log("event p");
          }}
        >
          lorem1
        </p>
        <p>lorem1</p>
        <p>lorem1</p>
        <p>lorem1</p>
        <p>lorem1</p>
      </div>

      <Button size="big" onClick={() => setTabId("tab1")}>
        tab 1
      </Button>

      <Button size="big" onClick={() => setTabId("tab2")}>
        tab 2
      </Button>

      <Button size="big" onClick={() => setTabId("tab3")}>
        tab 3
      </Button>

      <div className="content">
        {tabsData[tabId] ? tabsData[tabId] : "empty tab"}
      </div>

      {/* <div className="content">
        {!tabsData[tabId] && "empty tab"}
      </div> */}

      <div className="card">{/* <p>{counter}</p> */}</div>
    </>
  );
};
