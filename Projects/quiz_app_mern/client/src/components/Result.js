import React from "react";
import "../styles/Result.css";
import { Link } from "react-router-dom";
import { Resulttable } from "./Resulttable";
import { resetAllAction } from "../Redux/question_reducer";
import { resetResultAction } from "../Redux/result_reducer";
import { useDispatch } from "react-redux";

export default function Result() {
  const dispatch = useDispatch();

  function onRestart() {
    dispatch(resetAllAction());
    dispatch(resetResultAction());
  }
  return (
    <div className="container">
      <h1 className="title text-light"> Quiz Application</h1>
      <div className="result flex-center">
        <div className="flex">
          <span>Username</span>
          <span className="bold">Daily Tuition</span>
        </div>
        <div className="flex">
          <span>Total Quiz Points:</span>
          <span className="bold">50</span>
        </div>
        <div className="flex">
          <span>Total Attempts:</span>
          <span className="bold">03</span>
        </div>
        <div className="flex">
          <span>Total Earn Points:</span>
          <span className="bold">03</span>
        </div>
        <div className="flex">
          <span>Quiz Result:</span>
          <span className="bold">Passed</span>
        </div>
      </div>
      <div className="start">
        <Link className="btn" to={"/"} onClick={onRestart}>
          Restart
        </Link>
      </div>
      <div className="container">
        <Resulttable></Resulttable>
      </div>
    </div>
  );
}
