import { useDispatch } from "react-redux";
import { removeTodo, todoToggle } from "../../store/redusers/todos/todoSlice";
import { useState } from "react";

export const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const removeHandler = (id) => {
    dispatch(removeTodo({ id }));
  };

  const toggleHandler = (id) => {
    dispatch(todoToggle(id));
  };

  return (
    <div className="todo-item">
      {isEdit ? (
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      ) : (
        <h3>{todo.title}</h3>
      )}

      {isEdit ? (
        <button
          className="todo-item-btn"
          onClick={() => {
            setIsEdit(false);
            console.log(value);
          }}
        >
          Save
        </button>
      ) : (
        <button
          className="todo-item-btn"
          onClick={() => {
            setIsEdit(true);
            setValue(todo.title);
          }}
        >
          Edit title
        </button>
      )}

      <button className="todo-item-btn" onClick={() => toggleHandler(todo.id)}>
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
