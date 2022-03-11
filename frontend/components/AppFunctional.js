import React, { useState, useEffect } from "react";
import axios from "axios";

const URL = "http://localhost:9000/api/result";

const origin = [null, null, null, null, "B", null, null, null, null];

export default function AppFunctional(props) {
  const [grid, setGrid] = useState(origin);
  const [steps, setSteps] = useState(0);
  const [emailInput, setEmailInput] = useState("");
  const [message, setMessage] = useState("");

  const inputChangeHandler = (e) => {
    const { value } = e.target;
    setEmailInput(value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const payload = {
      x: x,
      y: y,
      steps: steps,
      email: emailInput,
    };

    axios
      .post(URL, payload)
      .then((res) => {
        setMessage(res.data.message);
      })
      .catch((err) => {
        setMessage(err.response.data.message);
      });

    setEmailInput("");
  };

  const getCoordinates = (gridShape) => {
    if (gridShape.indexOf("B") === 0) {
      return [1, 1];
    } else if (gridShape.indexOf("B") === 1) {
      return [2, 1];
    } else if (gridShape.indexOf("B") === 2) {
      return [3, 1];
    } else if (gridShape.indexOf("B") === 3) {
      return [1, 2];
    } else if (gridShape.indexOf("B") === 4) {
      return [2, 2];
    } else if (gridShape.indexOf("B") === 5) {
      return [3, 2];
    } else if (gridShape.indexOf("B") === 6) {
      return [1, 3];
    } else if (gridShape.indexOf("B") === 7) {
      return [2, 3];
    } else if (gridShape.indexOf("B") === 8) {
      return [3, 3];
    }
  };

  const [x, y] = getCoordinates(grid);

  const leftClickHandler = () => {
    if (message !== "") {
      setMessage("");
    }

    if (
      grid.indexOf("B") === 1 ||
      grid.indexOf("B") === 2 ||
      grid.indexOf("B") === 4 ||
      grid.indexOf("B") === 5 ||
      grid.indexOf("B") === 7 ||
      grid.indexOf("B") === 8
    ) {
      setSteps(steps + 1);
    } else {
      setMessage("You can't go left");
    }

    if (grid.indexOf("B") === 1) {
      setGrid(["B", null, null, null, null, null, null, null, null]);
    } else if (grid.indexOf("B") === 2) {
      setGrid([null, "B", null, null, null, null, null, null, null]);
    } else if (grid.indexOf("B") === 4) {
      setGrid([null, null, null, "B", null, null, null, null, null]);
    } else if (grid.indexOf("B") === 5) {
      setGrid(origin);
    } else if (grid.indexOf("B") === 7) {
      setGrid([null, null, null, null, null, null, "B", null, null]);
    } else if (grid.indexOf("B") === 8) {
      setGrid([null, null, null, null, null, null, null, "B", null]);
    }
  };

  const upClickHandler = () => {
    if (message !== "") {
      setMessage("");
    }

    if (grid.indexOf("B") > 2 && grid.indexOf("B") < 9) {
      setSteps(steps + 1);
    } else {
      setMessage("You can't go up");
    }

    if (grid.indexOf("B") === 3) {
      setGrid(["B", null, null, null, null, null, null, null, null]);
    } else if (grid.indexOf("B") === 4) {
      setGrid([null, "B", null, null, null, null, null, null, null]);
    } else if (grid.indexOf("B") === 5) {
      setGrid([null, null, "B", null, null, null, null, null, null]);
    } else if (grid.indexOf("B") === 6) {
      setGrid([null, null, null, "B", null, null, null, null, null]);
    } else if (grid.indexOf("B") === 7) {
      setGrid(origin);
    } else if (grid.indexOf("B") === 8) {
      setGrid([null, null, null, null, null, "B", null, null, null]);
    }
  };

  const rightClickHandler = () => {
    if (message !== "") {
      setMessage("");
    }

    if (
      grid.indexOf("B") === 0 ||
      grid.indexOf("B") === 1 ||
      grid.indexOf("B") === 3 ||
      grid.indexOf("B") === 4 ||
      grid.indexOf("B") === 6 ||
      grid.indexOf("B") === 7
    ) {
      setSteps(steps + 1);
    } else {
      setMessage("You can't go right");
    }

    if (grid.indexOf("B") === 0) {
      setGrid([null, "B", null, null, null, null, null, null, null]);
    } else if (grid.indexOf("B") === 1) {
      setGrid([null, null, "B", null, null, null, null, null, null]);
    } else if (grid.indexOf("B") === 3) {
      setGrid(origin);
    } else if (grid.indexOf("B") === 4) {
      setGrid([null, null, null, null, null, "B", null, null, null]);
    } else if (grid.indexOf("B") === 6) {
      setGrid([null, null, null, null, null, null, null, "B", null]);
    } else if (grid.indexOf("B") === 7) {
      setGrid([null, null, null, null, null, null, null, null, "B"]);
    }
  };

  const downClickHandler = () => {
    if (message !== "") {
      setMessage("");
    }

    if (grid.indexOf("B") >= 0 && grid.indexOf("B") < 6) {
      setSteps(steps + 1);
    } else {
      setMessage("You can't go down");
    }

    if (grid.indexOf("B") === 0) {
      setGrid([null, null, null, "B", null, null, null, null, null]);
    } else if (grid.indexOf("B") === 1) {
      setGrid(origin);
    } else if (grid.indexOf("B") === 2) {
      setGrid([null, null, null, null, null, "B", null, null, null]);
    } else if (grid.indexOf("B") === 3) {
      setGrid([null, null, null, null, null, null, "B", null, null]);
    } else if (grid.indexOf("B") === 4) {
      setGrid([null, null, null, null, null, null, null, "B", null]);
    } else if (grid.indexOf("B") === 5) {
      setGrid([null, null, null, null, null, null, null, null, "B"]);
    }
  };

  const resetClickHandler = () => {
    setSteps(0);
    setMessage("");
    setGrid(origin);
    setEmailInput("");
  };

  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">Coordinates {`(${x}, ${y})`}</h3>
        <h3 id="steps">
          You moved {steps} {steps === 1 ? "time" : "times"}
        </h3>
      </div>
      <div id="grid">
        <div className={`square ${grid[0] === "B" ? "active" : null}`}>{grid[0]}</div>
        <div className={`square ${grid[1] === "B" ? "active" : null}`}>{grid[1]}</div>
        <div className={`square ${grid[2] === "B" ? "active" : null}`}>{grid[2]}</div>
        <div className={`square ${grid[3] === "B" ? "active" : null}`}>{grid[3]}</div>
        <div className={`square ${grid[4] === "B" ? "active" : null}`}>{grid[4]}</div>
        <div className={`square ${grid[5] === "B" ? "active" : null}`}>{grid[5]}</div>
        <div className={`square ${grid[6] === "B" ? "active" : null}`}>{grid[6]}</div>
        <div className={`square ${grid[7] === "B" ? "active" : null}`}>{grid[7]}</div>
        <div className={`square ${grid[8] === "B" ? "active" : null}`}>{grid[8]}</div>
      </div>
      <div className="info">
        <h3 id="message">{message}</h3>
      </div>
      <div id="keypad">
        <button id="left" onClick={leftClickHandler}>
          LEFT
        </button>
        <button id="up" onClick={upClickHandler}>
          UP
        </button>
        <button id="right" onClick={rightClickHandler}>
          RIGHT
        </button>
        <button id="down" onClick={downClickHandler}>
          DOWN
        </button>
        <button id="reset" onClick={resetClickHandler}>
          reset
        </button>
      </div>
      <form onSubmit={submitHandler}>
        <input
          id="email"
          type="email"
          placeholder="type email"
          value={emailInput}
          onChange={inputChangeHandler}
        ></input>
        <input id="submit" data-testid="submit" type="submit"></input>
      </form>
    </div>
  );
}
