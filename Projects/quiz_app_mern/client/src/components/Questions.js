import React, { useEffect, useState } from "react";
import data from "../Database/data";
export default function Questions() {
  const [checked, setChecked] = useState(undefined);
  useEffect(() => {
    console.log(data);
  });
  function onSelect() {
    setChecked(true);
    console.log("radio button change");
  }
  return (
    <div className="questions">
      <h2 className="text-light">Simple Question 1</h2>
      <ul>
        <li>
          <input
            type="radio"
            value={true}
            name="options"
            id="q1_option"
            onChange={onSelect}
          />
          <label htmlFor="q1_option" className="text-primary">
            option
          </label>
          <div className="check checked"></div>
        </li>
      </ul>
    </div>
  );
}
