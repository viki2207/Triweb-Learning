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
  },
});
export const { setUserId } = resultReducer.actions;
export default resultReducer.reducer;
