import { useState, useContext, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles.scss";
import "./App.css";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { ThemeContext } from "./context/ThemeContext";
import { ErrorBoundary } from "./components/ErrorBoundary.jsx";
import { Post } from "./components/Post.jsx";
import { ClassComp } from "./components/ClassComp.jsx";

function App() {
  const [count, setCount] = useState(0);
  // const { darkTheme, toggleTheme } = useContext(ThemeContext);

  console.log("render App");

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <ClassComp />
        <ThemeSwitcher />

        <ErrorBoundary fallback={<h1>Error from post 1</h1>}>
          <Post name={"post 1"} />
        </ErrorBoundary>
        <ErrorBoundary fallback={<h1>Error from post 2</h1>}>
          <Post name={"post 2"} />
        </ErrorBoundary>

        <Post name={"post 3"} />

        {/* {darkTheme && count.map((item) => item)} */}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
