import { useState } from "react";
import { useDispatch } from "react-redux";
import { todoAdd } from "../../store/redusers/todos/todoSlice";

export const AddTodo = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();

    dispatch(todoAdd({ title: value }));

    setValue("");
  };

  return (
    <form className="add-todo-form" onSubmit={submitForm}>
      <input
        value={value}
        type="text"
        placeholder="add todo"
        onChange={({ target }) => setValue(target.value)}
      />
      <button type="submit">submit</button>
    </form>
  );
};
