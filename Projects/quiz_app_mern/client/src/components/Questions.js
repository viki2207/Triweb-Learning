import React, { useEffect, useState } from "react";
import data from "../Database/data";
import { useSelector } from "react-redux";
import { useFetchQuestion } from "../hooks/Fetchquestion";
export default function Questions() {
  const [checked, setChecked] = useState(undefined);
  const [{ isLoading, apiData, serverError }] = useFetchQuestion();
  const question = data[0];
  const questions = useSelector(
    (state) => state.questions.queue[state.questions.trace]
  );
  //const trace = useSelector((state) => state.questions.trace);

  useEffect(() => {
    console.log(questions);
  });

  useEffect(() => {
    // console.log(isLoading );
    // console.log(apiData);
    //console.log(serverError );
  });
  function onSelect() {
    setChecked(true);
    console.log("radio button change");
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
              onChange={onSelect}
            />
            <label htmlFor={`q${i}-option`} className="text-primary">
              {q}
            </label>

            <div className="check"></div>
          </li>
        ))}
      </ul>
    </div>
  );
}
