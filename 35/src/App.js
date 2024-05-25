import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        {toggle && <div data-testid="menu">menu</div>}

        <button data-testid="btn" onClick={() => setToggle((prev) => !prev)}>
          toggle menu
        </button>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
