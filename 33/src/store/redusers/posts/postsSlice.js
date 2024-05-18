import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: false,
  posts: [],
};

const API_URL = "https://66438d176c6a65658707885d.mockapi.io/api/post";

export const getPosts = createAsyncThunk(
  "postsList/getPosts",
  async ({ id }) => {
    const res = await fetch(API_URL);
    return res.json();
  }
);
// setPosts(data)
const postsSlice = createSlice({
  name: "postsList",
  initialState,
  reducers: {
    setPosts(state, { payload }) {
      state.posts = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      }),
      builder.addCase(getPosts.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const { setPosts } = postsSlice.actions;

export default postsSlice.reducer;
