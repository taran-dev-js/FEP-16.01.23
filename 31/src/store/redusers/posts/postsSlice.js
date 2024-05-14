import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

const API_URL = "https://66438d176c6a65658707885d.mockapi.io/api/post";

export const getPosts = createAsyncThunk(
  "postsList/getPosts",
  async (_, { rejectWithValues, dispatch }) => {
    const res = await fetch(API_URL);
    const data = await res.json();
    dispatch(setPosts(data));
  }
);

const postsSlice = createSlice({
  name: "postsList",
  initialState,
  reducers: {
    setPosts(state, { payload }) {
      state.posts = payload;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(getPosts, (state, action) => {
    //   console(action);
    // });
  },
});

export const { setPosts } = postsSlice.actions;

export default postsSlice.reducer;
