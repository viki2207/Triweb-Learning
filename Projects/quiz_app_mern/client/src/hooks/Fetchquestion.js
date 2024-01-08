import { useState, useEffect } from "react";
import data, { answers } from "../Database/data";
import { useDispatch } from "react-redux";
import * as Action from "../Redux/question_reducer";
import { getServerData } from "../helper/helper";

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
        // `${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions`
        let question = await data;
        const [{ questions, answers }] = await getServerData(
          "http://localhost:5005/api/questions",
          (data) => data
        );

        if (questions.length > 0) {
          setGetData((prev) => ({ ...prev, isLoading: false }));
          setGetData((prev) => ({ ...prev, apiData: { question, answers } }));
          dispatch(Action.startExamAction({ question: questions, answers }));
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
