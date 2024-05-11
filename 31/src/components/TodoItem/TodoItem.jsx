import { useDispatch } from "react-redux";
import { removeTodo } from "../../store/redusers/todos/todoSlice";

export const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const removeHandler = (id) => {
    dispatch(removeTodo({ id }));
  };

  return (
    <div className="todo-item">
      <h3>{todo.title}</h3>
      <button className="todo-item-btn" onClick={() => {}}>
        {todo.completed ? "Completed" : "Not Completed"}
      </button>
      <button
        className="todo-item-btn-remove"
        onClick={() => removeHandler(todo.id)}
      >
        remove
      </button>
    </div>
  );
};
