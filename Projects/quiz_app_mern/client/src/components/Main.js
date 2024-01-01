import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/Main.css";
import { setUserId } from "../Redux/result_reducer";
import { useDispatch } from "react-redux";

export const Main = () => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  function startQuiz() {
    if (inputRef.current?.value) {
      dispatch(setUserId(inputRef.current?.value));
    }
  }
  return (
    <div className="container">
      <h1 className="title text-light"> Quiz Application</h1>
      <ol>
        <li>You will be asked 10 questions one after another</li>
        <li>10 points awarded for the correct answer</li>
        <li>Each question has three options. you can choose only one option</li>
        <li>You can review and change the answer before the quiz finish</li>
        <li>The result will be declared at the end of the quiz.</li>
      </ol>
      <form id="form">
        <input
          ref={inputRef}
          className="userid"
          type="text"
          placeholder="Username*"
        ></input>
      </form>
      <div className="start">
        <Link className="btn" onClick={startQuiz} to={"/quiz"}>
          Start quiz
        </Link>
      </div>
    </div>
  );
};
export default Main;
