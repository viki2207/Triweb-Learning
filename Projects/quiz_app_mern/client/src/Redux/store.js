import { combineReducers, configureStore } from "@reduxjs/toolkit";
//call reducers
//redux means  pass ther cerntral in a store
//reducer meaning take the previous state and process action and return new update state
import questionReducer from "./question_reducer";
import { resultReducer } from "./result_reducer";
//combine and return as a central store
const rootReducer = combineReducers({
  questions: questionReducer,
  result: resultReducer,
});
//create store with reducer
export default configureStore({ reducer: rootReducer });
