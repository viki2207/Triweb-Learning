import React, { useEffect } from "react";
import Questions from "./Questions";
import { useSelector } from "react-redux";

export default function Quiz() {
  //transforming the data  to update the state
  //extract the data from the redux storeusing this

  const state = useSelector((state) => state);
  useEffect(() => {
    console.log(state);
  });
  /** next button event handler */
  function onNext() {
    console.log("On next click");
  }
  /** prev button event handler */
  function onPrev() {
    console.log("On prev click");
  }
  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>
      {/** display all questions*/}
      <Questions></Questions>
      <div className="grid">
        <button className="btn prev" onClick={onPrev}>
          Prev
        </button>
        <button className="btn next" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
}
