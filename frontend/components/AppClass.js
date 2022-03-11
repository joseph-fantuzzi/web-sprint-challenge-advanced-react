import React from "react";
import axios from "axios";

const URL = "http://localhost:9000/api/result";

const origin = [null, null, null, null, "B", null, null, null, null];

export default class AppClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: origin,
      steps: 0,
      emailInput: "",
      message: "",
    };
  }

  inputChangeHandler = (e) => {
    const { value } = e.target;
    this.setState({
      ...this.state,
      emailInput: value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const [x, y] = this.getCoordinates(this.state.grid);

    const payload = {
      x: x,
      y: y,
      steps: this.state.steps,
      email: this.state.emailInput,
    };

    axios
      .post(URL, payload)
      .then((res) => {
        this.setState({
          ...this.state,
          message: res.data.message,
        });
      })
      .catch((err) => {
        this.setState({
          ...this.state,
          message: err.response.data.message,
        });
      });

    this.setState({
      ...this.state,
      emailInput: "",
    });
  };

  getCoordinates = (gridShape) => {
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

  leftClickHandler = () => {
    this.state.message !== "" && this.setState({ ...this.state, message: "" });

    if (
      this.state.grid.indexOf("B") === 1 ||
      this.state.grid.indexOf("B") === 2 ||
      this.state.grid.indexOf("B") === 4 ||
      this.state.grid.indexOf("B") === 5 ||
      this.state.grid.indexOf("B") === 7 ||
      this.state.grid.indexOf("B") === 8
    ) {
      this.setState({
        ...this.state,
        steps: this.state.steps + 1,
      });
      console.log(this.state.steps);
    } else {
      this.setState({
        ...this.state,
        message: "You can't go left",
      });
    }

    if (this.state.grid.indexOf("B") === 1) {
      this.setState({
        ...this.state,
        grid: ["B", null, null, null, null, null, null, null, null],
      });
    } else if (this.state.grid.indexOf("B") === 2) {
      this.setState({
        ...this.state,
        grid: [null, "B", null, null, null, null, null, null, null],
      });
    } else if (this.state.grid.indexOf("B") === 4) {
      this.setState({
        ...this.state,
        grid: [null, null, null, "B", null, null, null, null, null],
      });
    } else if (this.state.grid.indexOf("B") === 5) {
      this.setState({
        ...this.state,
        grid: origin,
      });
    } else if (this.state.grid.indexOf("B") === 7) {
      this.setState({
        ...this.state,
        grid: [null, null, null, null, null, null, "B", null, null],
      });
    } else if (this.state.grid.indexOf("B") === 8) {
      this.setState({
        ...this.state,
        grid: [null, null, null, null, null, null, null, "B", null],
      });
    }
  };

  upClickHandler = () => {
    this.state.message !== "" && this.setState({ ...this.state, message: "" });

    if (
      this.state.grid.indexOf("B") === 3 ||
      this.state.grid.indexOf("B") === 4 ||
      this.state.grid.indexOf("B") === 5 ||
      this.state.grid.indexOf("B") === 6 ||
      this.state.grid.indexOf("B") === 7 ||
      this.state.grid.indexOf("B") === 8
    ) {
      this.setState({
        ...this.state,
        steps: this.state.steps + 1,
      });
    } else {
      this.setState({
        ...this.state,
        message: "You can't go up",
      });
    }

    if (this.state.grid.indexOf("B") === 3) {
      this.setState({
        ...this.state,
        grid: ["B", null, null, null, null, null, null, null, null],
      });
    } else if (this.state.grid.indexOf("B") === 4) {
      this.setState({
        ...this.state,
        grid: [null, "B", null, null, null, null, null, null, null],
      });
    } else if (this.state.grid.indexOf("B") === 5) {
      this.setState({
        ...this.state,
        grid: [null, null, "B", null, null, null, null, null, null],
      });
    } else if (this.state.grid.indexOf("B") === 6) {
      this.setState({
        ...this.state,
        grid: [null, null, null, "B", null, null, null, null, null],
      });
    } else if (this.state.grid.indexOf("B") === 7) {
      this.setState({
        ...this.state,
        grid: origin,
      });
    } else if (this.state.grid.indexOf("B") === 8) {
      this.setState({
        ...this.state,
        grid: [null, null, null, null, null, "B", null, null, null],
      });
    }
  };

  rightClickHandler = () => {
    this.state.message !== "" && this.setState({ ...this.state, message: "" });

    if (
      this.state.grid.indexOf("B") === 0 ||
      this.state.grid.indexOf("B") === 1 ||
      this.state.grid.indexOf("B") === 3 ||
      this.state.grid.indexOf("B") === 4 ||
      this.state.grid.indexOf("B") === 6 ||
      this.state.grid.indexOf("B") === 7
    ) {
      this.setState({
        ...this.state,
        steps: this.state.steps + 1,
      });
    } else {
      this.setState({
        ...this.state,
        message: "You can't go right",
      });
    }

    if (this.state.grid.indexOf("B") === 0) {
      this.setState({
        ...this.state,
        grid: [null, "B", null, null, null, null, null, null, null],
      });
    } else if (this.state.grid.indexOf("B") === 1) {
      this.setState({
        ...this.state,
        grid: [null, null, "B", null, null, null, null, null, null],
      });
    } else if (this.state.grid.indexOf("B") === 3) {
      this.setState({
        ...this.state,
        grid: origin,
      });
    } else if (this.state.grid.indexOf("B") === 4) {
      this.setState({
        ...this.state,
        grid: [null, null, null, null, null, "B", null, null, null],
      });
    } else if (this.state.grid.indexOf("B") === 6) {
      this.setState({
        ...this.state,
        grid: [null, null, null, null, null, null, null, "B", null],
      });
    } else if (this.state.grid.indexOf("B") === 7) {
      this.setState({
        ...this.state,
        grid: [null, null, null, null, null, null, null, null, "B"],
      });
    }
  };

  downClickHandler = () => {
    this.state.message !== "" && this.setState({ ...this.state, message: "" });

    if (
      this.state.grid.indexOf("B") === 0 ||
      this.state.grid.indexOf("B") === 1 ||
      this.state.grid.indexOf("B") === 2 ||
      this.state.grid.indexOf("B") === 3 ||
      this.state.grid.indexOf("B") === 4 ||
      this.state.grid.indexOf("B") === 5
    ) {
      this.setState({
        ...this.state,
        steps: this.state.steps + 1,
      });
    } else {
      this.setState({
        ...this.state,
        message: "You can't go down",
      });
    }

    if (this.state.grid.indexOf("B") === 0) {
      this.setState({
        ...this.state,
        grid: [null, null, null, "B", null, null, null, null, null],
      });
    } else if (this.state.grid.indexOf("B") === 1) {
      this.setState({
        ...this.state,
        grid: origin,
      });
    } else if (this.state.grid.indexOf("B") === 2) {
      this.setState({
        ...this.state,
        grid: [null, null, null, null, null, "B", null, null, null],
      });
    } else if (this.state.grid.indexOf("B") === 3) {
      this.setState({
        ...this.state,
        grid: [null, null, null, null, null, null, "B", null, null],
      });
    } else if (this.state.grid.indexOf("B") === 4) {
      this.setState({
        ...this.state,
        grid: [null, null, null, null, null, null, null, "B", null],
      });
    } else if (this.state.grid.indexOf("B") === 5) {
      this.setState({
        ...this.state,
        grid: [null, null, null, null, null, null, null, null, "B"],
      });
    }
  };

  resetClickHandler = () => {
    this.setState({
      ...this.state,
      steps: 0,
      message: "",
      grid: origin,
    });
  };

  render() {
    const { className } = this.props;
    const [x, y] = this.getCoordinates(this.state.grid);

    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">Coordinates {`(${x}, ${y})`}</h3>
          <h3 id="steps">You moved {this.state.steps} times</h3>
        </div>
        <div id="grid">
          <div className={`square ${this.state.grid[0] === "B" ? "active" : null}`}>
            {this.state.grid[0]}
          </div>
          <div className={`square ${this.state.grid[1] === "B" ? "active" : null}`}>
            {this.state.grid[1]}
          </div>
          <div className={`square ${this.state.grid[2] === "B" ? "active" : null}`}>
            {this.state.grid[2]}
          </div>
          <div className={`square ${this.state.grid[3] === "B" ? "active" : null}`}>
            {this.state.grid[3]}
          </div>
          <div className={`square ${this.state.grid[4] === "B" ? "active" : null}`}>
            {this.state.grid[4]}
          </div>
          <div className={`square ${this.state.grid[5] === "B" ? "active" : null}`}>
            {this.state.grid[5]}
          </div>
          <div className={`square ${this.state.grid[6] === "B" ? "active" : null}`}>
            {this.state.grid[6]}
          </div>
          <div className={`square ${this.state.grid[7] === "B" ? "active" : null}`}>
            {this.state.grid[7]}
          </div>
          <div className={`square ${this.state.grid[8] === "B" ? "active" : null}`}>
            {this.state.grid[8]}
          </div>
        </div>
        <div className="info">
          <h3 id="message">{this.state.message}</h3>
        </div>
        <div id="keypad">
          <button id="left" onClick={this.leftClickHandler}>
            LEFT
          </button>
          <button id="up" onClick={this.upClickHandler}>
            UP
          </button>
          <button id="right" onClick={this.rightClickHandler}>
            RIGHT
          </button>
          <button id="down" onClick={this.downClickHandler}>
            DOWN
          </button>
          <button id="reset" onClick={this.resetClickHandler}>
            reset
          </button>
        </div>
        <form onSubmit={this.submitHandler}>
          <input
            id="email"
            type="email"
            placeholder="type email"
            value={this.state.emailInput}
            onChange={this.inputChangeHandler}
          ></input>
          <input id="submit" type="submit"></input>
        </form>
      </div>
    );
  }
}
