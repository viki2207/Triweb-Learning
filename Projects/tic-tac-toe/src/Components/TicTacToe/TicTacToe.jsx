import React, { useRef, useState } from "react";
import "./TicTacToe.css";
import CircleIcon from "../Assets/circle.png";
import CrossIcon from "../Assets/cross.png";
let data = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {
  let [count, setcount] = useState(0);
  let [lock, setlock] = useState(false);
  let titleRef = useRef(null);
  let Box1 = useRef(null);
  let Box2 = useRef(null);
  let Box3 = useRef(null);
  let Box4 = useRef(null);
  let Box5 = useRef(null);
  let Box6 = useRef(null);
  let Box7 = useRef(null);
  let Box8 = useRef(null);
  let Box9 = useRef(null);
  let Box_array = [Box1, Box2, Box3, Box4, Box5, Box6, Box7, Box8, Box9];

  ///Toggle function Instrunctions
  //toggle function using for the apply  cross and o image alterations
  //there is a logic if even then pass cross and odd pass circle
  // there is a logic in a element
  //after applying image than increase to the count than count set in a use state and re rerender whole code
  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src = '${CrossIcon}'>`;
      data[num] = "x";
      setcount(++count);
    } else {
      e.target.innerHTML = `<img src = '${CircleIcon}'>`;
      data[num] = "O";
      setcount(++count);
    }
    checkWin();
  };
  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[5]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[6]);
    }
  };
  const won = (winner) => {
    setlock(true);
    if (winner === "x") {
      titleRef.current.innerHTML = `Congratulations:<img src = '${CrossIcon}'>Wins`;
    } else {
      titleRef.current.innerHTML = `Congratulations:<img src = '${CircleIcon}'>Wins`;
    }
  };
  const reset = () => {
    console.log("reset");
    setlock(false);
    data = ["", "", "", "", "", "", "", "", ""];
    titleRef.current.innerHTML = ` TIC-TAC-TOE Game In
    <span>React</span>`;
    Box_array.map((e) => {
      e.current.innerHTML = "";
    });
  };
  return (
    <div className="container">
      <h1 className="title" ref={titleRef}>
        TIC-TAC-TOE Game In <span>React</span>
      </h1>
      <div className="board">
        <div className="row1">
          <div
            className="boxes"
            ref={Box1}
            onClick={(e) => {
              toggle(e, 0);
            }}
          ></div>
          <div
            className="boxes"
            ref={Box2}
            onClick={(e) => {
              toggle(e, 1);
            }}
          ></div>
          <div
            className="boxes"
            ref={Box3}
            onClick={(e) => {
              toggle(e, 2);
            }}
          ></div>
        </div>
        <div className="row2">
          <div
            className="boxes"
            ref={Box4}
            onClick={(e) => {
              toggle(e, 3);
            }}
          ></div>
          <div
            className="boxes"
            ref={Box5}
            onClick={(e) => {
              toggle(e, 4);
            }}
          ></div>
          <div
            className="boxes"
            ref={Box6}
            onClick={(e) => {
              toggle(e, 5);
            }}
          ></div>
        </div>
        <div className="row3">
          <div
            className="boxes"
            ref={Box7}
            onClick={(e) => {
              toggle(e, 6);
            }}
          ></div>
          <div
            className="boxes"
            ref={Box8}
            onClick={(e) => {
              toggle(e, 7);
            }}
          ></div>
          <div
            className="boxes"
            ref={Box9}
            onClick={(e) => {
              toggle(e, 8);
            }}
          ></div>
        </div>
      </div>
      <button
        className="reset"
        onClick={() => {
          reset();
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default TicTacToe;
