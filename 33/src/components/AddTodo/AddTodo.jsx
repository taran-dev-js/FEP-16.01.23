import { useState } from "react";
import { useDispatch } from "react-redux";
import { todoAdd } from "../../store/redusers/todos/todoSlice";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";

export const AddTodo = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();

    if (!value.trim()) {
      return;
    }

    dispatch(todoAdd({ title: value }));

    setValue("");
  };

  return (
    <form className="add-todo-form" onSubmit={submitForm}>
      <Input
        value={value}
        type="text"
        placeholder="add todo"
        onChange={({ target }) => setValue(target.value)}
      />
      <Button variant="contained" type="submit">
        submit
      </Button>
    </form>
  );
};
