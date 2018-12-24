import React, { Component } from "react";
import ReactDOM from "react-dom";
import Row from "./Row.jsx";

class Board extends Component {
  constructor() {
    super();
  }
  render() {
    let rowNumbers = [0, 1, 2, 3, 4, 5];
    let rows = rowNumbers.map(rowNumber => (
      <Row x={rowNumber} key={rowNumber} />
    ));
    console.log(rows);
    return <div className="board">{rows}</div>;
  }
}
export default Board;
