import React, { useEffect, useState } from "react";
import Questions from "./Questions";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { PushAnswer } from "../hooks/setResult";

import { moveNextAction, movePrevAction } from "../hooks/Fetchquestion";
export default function Quiz() {
  const [check, setChecked] = useState(undefined);
  //transforming the data  to update the state
  //extract the data from the redux storeusing this
  const result = useSelector((state) => state.result.result);
  //const trace = useSelector((state) => state.questions.trace);
  const { queue, trace } = useSelector((state) => state.questions);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(result);
    // console.log(trace);
    // console.log("here");
  });
  /** next button event handler */
  function onNext() {
    console.log("On next click");
    if (trace < queue.length) {
      dispatch(moveNextAction());
      if (result.length <= trace) {
        /** Insert a new array */
        dispatch(PushAnswer(check));
      }
    }
    //update the trace value by one using move next action
  }
  /** prev button event handler */
  function onPrev() {
    console.log("On prev click");
    if (trace > 0) {
      dispatch(movePrevAction());
    }
  }
  function onChecked(check) {
    //console.log(check);
    setChecked(check);
  }
  /** finish exam after the last question */
  if (result.length && result.length >= queue.length) {
    return <Navigate to={"/result"} replace="true"></Navigate>;
  }
  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>
      {/** display all questions*/}
      <Questions onChecked={onChecked}></Questions>
      <div className="grid">
        {trace > 0 ? (
          <button className="btn prev" onClick={onPrev}>
            {" "}
            Prev
          </button>
        ) : (
          <div></div>
        )}

        <button className="btn next" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
}
