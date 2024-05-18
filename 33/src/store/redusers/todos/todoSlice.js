import { createSlice, current } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const initialState = {
  todos: [
    {
      id: v4(),
      title: "title todo 1",
      completed: false,
    },
  ],
};

const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    todoAdd(state, { payload }) {
      state.todos.push({
        id: v4(),
        title: payload.title,
        completed: false,
      });
    },
    todoToggle(state, { payload }) {
      const todo = state.todos.find((todo) => todo.id === payload);
      todo.completed = !todo.completed;
    },
    removeTodo(state, { payload }) {
      console.log({ state, payload });
      state.todos = state.todos.filter((todo) => todo.id !== payload.id);
    },
  },
});

export const { todoAdd, removeTodo, todoToggle } = todoSlice.actions;
export default todoSlice.reducer;
