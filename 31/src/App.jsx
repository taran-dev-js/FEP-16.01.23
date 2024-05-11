import { useState } from "react";
import "./App.css";
import { AddTodo } from "./components/AddTodo/AddTodo";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { useSelector } from "react-redux";

function App() {
  const [count, setCount] = useState(0);
  const todoList = useSelector((state) => state.todoList.todos);

  return (
    <>
      <AddTodo />
      <div className="todo-list">
        {todoList.map((item) => (
          <TodoItem key={item.id} todo={item} />
        ))}
      </div>
    </>
  );
}

export default App;
