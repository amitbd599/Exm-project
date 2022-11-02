import { createSlice } from "@reduxjs/toolkit";

export const BlogDataSlice = createSlice({
  name: "data",
  initialState: {
    GetData: [],
  },
  reducers: {
    SetData: (state, action) => {
      state.GetData = action.payload;
    },
  },
});

export const { SetData } = BlogDataSlice.actions;
export default BlogDataSlice.reducer;
