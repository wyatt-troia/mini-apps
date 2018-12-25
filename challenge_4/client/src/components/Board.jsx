import React, { Component } from "react";
import ReactDOM from "react-dom";
import Row from "./Row.jsx";

class Board extends Component {
  constructor() {
    super();
    this.state = {
      currentPlayer: "red"
    };
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor(e) {
    e.target.style.backgroundColor = this.state.currentPlayer;
    this.setState(state => ({
      currentPlayer: state.currentPlayer === "red" ? "green" : "red"
    }));
  }
  render() {
    let rowNumbers = [0, 1, 2, 3, 4, 5];
    let rows = rowNumbers.map(rowNumber => (
      <Row x={rowNumber} key={rowNumber} changeColor={this.changeColor} />
    ));
    return <div className="board">{rows}</div>;
  }
}
export default Board;
