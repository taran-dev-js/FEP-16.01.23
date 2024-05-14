import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./redusers/todos/todoSlice";
import postsSlice from "./redusers/posts/postsSlice";

export const store = configureStore({
  reducer: {
    todoList: todoSlice,
    postsList: postsSlice,
  },
});
