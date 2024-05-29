import { useState } from "react";
import "./App.css";

type UserWithCount = {
  count: number;
  user: { name: string };
};

export type TypeTodo = {
  id: string;
  value?: string;
  done: boolean;
};

type TypeTodo2 = TypeTodo & { user: { name: string } };

const todo: TypeTodo = {
  id: "",
  value: "string",
  done: false,
};

type CatName = "true" | "false";

const catName: CatName = "true";

if (catName === "true") {
} else {
  // catName.map()
}

function App() {
  const [count, setCount] = useState<number>(0);
  const [todos, setTodos] = useState<TypeTodo[]>([todo]);
  const [value, setValue] = useState("");

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    setTodos((prev) => [...prev, { value, id: "id", done: false }]);
  };
  const userId = "string";
  const sessionId: "" | undefined = undefined;
  const products = [];

  function doSomething(userId: string, sessionId: string | undefined) {
    if (!sessionId) {
      return;
    }
    // ...
  }

  doSomething(userId, sessionId);

  const filterFunction = (): TypeTodo[] | undefined => {
    if (count) {
      return todos.filter((item) => item.done);
    }

    return undefined;
  };

  const arr = filterFunction();

  return (
    <>
      <div>
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
      </div>
      <ul>
        {todos.map((item) => (
          <li key={item.value}>{item.value}</li>
        ))}
      </ul>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
