import { useState } from "react";
import "./App.css";
import { Button } from "./Button";
import { useMemo } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { Product } from "./Product";

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    setTodos((prev) => [...prev, { value }]);
  };
  console.log("render APP ");
  const filterTodo = (todos) => {
    const result = todos?.find((item) => item);

    // setTodos(result);
    console.log("filter todo => return todo[]");
  };

  // const resultFilter = filterTodo();

  // useEffect(() => {
  //   filterTodo();
  // }, [todos]);

  // const resultFilter = useMemo(() => filterTodo(todos), [todos]);

  const handler = useCallback(
    (e) => {
      console.log("handler", e);
    },
    [todos]
  );

  return (
    <>
      <Product />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <form>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit" onClick={handleAdd}>
            Add new
          </button>
        </form>

        <Button handler={handler} />
        <ul>
          {todos.map((item) => (
            <li key={item.value}>{item.value}</li>
          ))}
        </ul>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
