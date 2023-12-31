import React, { useEffect, useState } from "react";
import data from "../Database/data";
import { useDispatch, useSelector } from "react-redux";
import { useFetchQuestion } from "../hooks/Fetchquestion";
import { updateResultAction } from "../Redux/result_reducer";
import { updateResult } from "../hooks/setResult";

export default function Questions({ onChecked }) {
  const [checked, setChecked] = useState(undefined);
  const { trace } = useSelector((state) => state.questions);
  const result = useSelector((state) => state.result.result);
  const [{ isLoading, apiData, serverError }] = useFetchQuestion();
  const question = data[0];
  const questions = useSelector(
    (state) => state.questions.queue[state.questions.trace]
  );
  const dispatch = useDispatch();
  //const trace = useSelector((state) => state.questions.trace);

  useEffect(() => {
    dispatch(updateResult({ trace, checked }));
  }, [checked]);

  // useEffect(() => {
  //   // console.log(isLoading );
  //   // console.log(apiData);
  //   //console.log(serverError );
  // });
  function onSelect(i) {
    console.log(i);
    onChecked(i);
    setChecked(i);
  }
  if (isLoading) return <h3 className="text-light">isLoading</h3>;
  if (serverError)
    return <h3 className="text-light">{serverError || "Unknown Error"}</h3>;
  return (
    <div className="questions">
      <h2 className="text-light">{questions?.question}</h2>
      <ul key={questions?.id}>
        {questions?.options.map((q, i) => (
          <li key={i}>
            <input
              type="radio"
              value={true}
              name="options"
              id={`q${i}-option`}
              onChange={() => onSelect(i)}
            />
            <label htmlFor={`q${i}-option`} className="text-primary">
              {q}
            </label>

            <div
              className={`check ${result[trace] == i ? "checked" : ""}`}
            ></div>
          </li>
        ))}
      </ul>
    </div>
  );
}
