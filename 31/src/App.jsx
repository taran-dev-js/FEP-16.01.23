import { useEffect, useState } from "react";
import "./App.css";
import { AddTodo } from "./components/AddTodo/AddTodo";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "./store/redusers/posts/postsSlice";
import { PostSelector } from "./store/redusers/posts/postsSelector";

function App() {
  const [count, setCount] = useState(0);
  const todoList = useSelector((state) => state.todoList.todos);
  const posts = useSelector(PostSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <>
      {posts.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <img src={item.avatar} alt="" />
        </div>
      ))}
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
