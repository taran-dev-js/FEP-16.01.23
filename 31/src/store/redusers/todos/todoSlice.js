import { createSlice } from "@reduxjs/toolkit";
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
    removeTodo(state, { payload }) {
      console.log({ state, payload });
      state.todos = state.todos.filter((todo) => todo.id !== payload.id);
    },
  },
});

export const { todoAdd, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
