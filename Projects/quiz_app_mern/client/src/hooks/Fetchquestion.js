import { useState, useEffect } from "react";
import data from "../Database/data";
import { useDispatch } from "react-redux";
import * as Action from "../Redux/question_reducer";

/** This is a fetch question hook to fetch api data and set value to the store */
export const useFetchQuestion = () => {
  const dispatch = useDispatch();
  const [getData, setGetData] = useState({
    isLoading: false,
    apiData: [],
    serverError: null,
  });
  //set the value
  useEffect(() => {
    setGetData((prev) => ({ ...prev, isLoading: true }));
    (async () => {
      try {
        let question = await data;
        if (question.length > 0) {
          setGetData((prev) => ({ ...prev, isLoading: false }));
          setGetData((prev) => ({ ...prev, apiData: question }));
          dispatch(Action.startExamination(question));
        } else {
          throw new Error("No question Available");
        }
      } catch (error) {
        setGetData((prev) => ({ ...prev, isLoading: false }));
        setGetData((prev) => ({ ...prev, serverError: error }));
      }
    })();
    //dispatch use for the continous for that loop to  remove
  }, [dispatch]);
  return [getData, setGetData];
};
//move action dispatch function
export const moveNextAction = () => async (dispatch) => {
  try {
    dispatch(Action.moveNextAction());
  } catch (error) {
    console.log(error);
  }
};

//prev  action dispatch function
export const movePrevAction = () => async (dispatch) => {
  try {
    dispatch(Action.movePrevAction());
  } catch (error) {}
};
