import { createSlice } from "@reduxjs/toolkit";

export const resultReducer = createSlice({
  name: "result",
  //store all the result in this array
  initialState: {
    userId: null,
    result: [],
  },
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    pushResultAction: (state, action) => {
      state.result.push(action.payload);
    },
    resetResultAction: (state, action) => {
      return {
        userId: null,
        result: [],
      };
    },
  },
});
export const { setUserId, pushResultAction, resetResultAction } =
  resultReducer.actions;
export default resultReducer.reducer;
