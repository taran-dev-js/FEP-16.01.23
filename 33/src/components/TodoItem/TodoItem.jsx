import { useDispatch } from "react-redux";
import { removeTodo, todoToggle } from "../../store/redusers/todos/todoSlice";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import { StylesTypography } from "./TodoItemStyles";

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
    <Card
      sx={{
        borderRadius: "20px",
        marginBottom: "20px",
      }}
    >
      {isEdit ? (
        <Input
          defaultValue="Hello world"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      ) : (
        <StylesTypography as="h2">{todo.title}</StylesTypography>
      )}
      <ButtonGroup className="ButtonGroup">
        {isEdit ? (
          <Button
            onClick={() => {
              setIsEdit(false);
              console.log(value);
            }}
          >
            Save
          </Button>
        ) : (
          <Button
            onClick={() => {
              setIsEdit(true);
              setValue(todo.title);
            }}
          >
            Edit title
          </Button>
        )}

        <Button variant="contained" onClick={() => toggleHandler(todo.id)}>
          {todo.completed ? "Completed" : "Not Completed"}
        </Button>

        <Button variant="contained" onClick={() => removeHandler(todo.id)}>
          remove
        </Button>
      </ButtonGroup>
    </Card>
  );
};
