import React, { useState } from "react";
import axios from "axios";

const URL = "http://localhost:9000/api/result";

export default function AppFunctional(props) {
  const [grid, setGrid] = useState([]);
  const [emailInput, setEmailInput] = useState("");

  const inputChangeHandler = (e) => {
    const { value } = e.target;
    setEmailInput(value);
  };

  const submitHandler = () => {
    const payload = {
      x: 1,
      y: 2,
      steps: 3,
      email: "lady@gaga.com",
    };
    // axios.post(URL, payload)
    //    .then(res => {
    //       debugger
    //    })
    //    .catch(err => {
    //       debugger
    //    })
  };

  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">Coordinates (2, 2)</h3>
        <h3 id="steps">You moved 0 times</h3>
      </div>
      <div id="grid">
        <div className="square">{grid[0]}</div>
        <div className="square">{grid[1]}</div>
        <div className="square">{grid[2]}</div>
        <div className="square">{grid[3]}</div>
        <div className="square active">{grid[4]}</div>
        <div className="square">{grid[5]}</div>
        <div className="square">{grid[6]}</div>
        <div className="square">{grid[7]}</div>
        <div className="square">{grid[8]}</div>
      </div>
      <div className="info">
        <h3 id="message"></h3>
      </div>
      <div id="keypad">
        <button id="left">LEFT</button>
        <button id="up">UP</button>
        <button id="right">RIGHT</button>
        <button id="down">DOWN</button>
        <button id="reset">reset</button>
      </div>
      <form onSubmit={submitHandler}>
        <input
          id="email"
          type="email"
          placeholder="type email"
          value={emailInput}
          onChange={inputChangeHandler}
        ></input>
        <input id="submit" type="submit"></input>
      </form>
    </div>
  );
}
