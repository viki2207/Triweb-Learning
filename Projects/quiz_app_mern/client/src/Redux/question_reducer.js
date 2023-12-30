import { createSlice } from "@reduxjs/toolkit";
//create reducer
export const questionReducer = createSlice({
  name: "questions",
  initialState: {
    //store all the question
    queue: [],
    //store all answer
    answers: [],
    //store crack question  index
    trace: 0,
  }, //specift dispatch and action
  //action allows you to change the value of the store
  //u can only change the value of the store using action
  //otherwisse u cant change the value of the store
  //u create reducer automatically create the action
  reducers: {
    //update the value of the store
    startExamination: (state, action) => {
      return {
        ...state,
        queue: action.payload, //payload means user input
      };
    },
    moveNextAction: (state, action) => {
      return {
        //get previous state
        ...state,
        trace: state.trace + 1,
      };
    },
    movePrevAction: (state) => {
      return {
        ...state,
        trace: state.trace - 1,
      };
    },
    resetAllAction: () => {
      return {
        queue: [],
        //store all answer
        answers: [],
        //store crack question  index
        trace: 0,
      };
    },
  },
});
export const {
  startExamination,
  moveNextAction,
  movePrevAction,
  resetAllAction,
} = questionReducer.actions;
export default questionReducer.reducer;
