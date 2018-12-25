import React, { Component } from "react";
import ReactDOM from "react-dom";
import Row from "./Row.jsx";

class Board extends Component {
  constructor() {
    super();
    let board = [];
    for (let x = 0; x < 6; x++) {
      let row = [];
      for (let y = 0; y < 7; y++) {
        row.push(0);
      }
      board.push(row);
    }
    this.state = {
      currentPlayer: 1,
      playerColors: {
        1: "red",
        2: "green"
      },
      board
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    let x = e.target.parentElement.getAttribute("x");
    let y = null;
    for (let i = 0; i < this.state.board.length; i++) {
      let rowElement = this.state.board[i][x];
      console.log(rowElement);
      if (rowElement !== 0) {
        y = i - 1;
        break;
      }
      if (i === this.state.board.length - 1) {
        y = i;
      }
    }
    console.log(`y: ${y}`);
    if (y >= 0) {
      let board = this.state.board;
      board[y][x] = this.state.currentPlayer;
      let xElems = document.querySelectorAll(`[x="${x}"]`);
      xElems = Array.from(xElems);
      let yElems = document.querySelectorAll(`[y="${y}"]`);
      yElems = Array.from(yElems);
      let elem = xElems.filter(elem => -1 !== yElems.indexOf(elem))[0]
        .children[0];
      console.log(elem);
      // debugger;
      elem.style.backgroundColor = this.state.playerColors[
        this.state.currentPlayer
      ];
      this.setState(state => ({
        currentPlayer: state.currentPlayer === 1 ? 2 : 1
      }));
    }
  }
  render() {
    let rowNumbers = [0, 1, 2, 3, 4, 5];
    let rows = rowNumbers.map(rowNumber => (
      <Row y={rowNumber} key={rowNumber} handleClick={this.handleClick} />
    ));
    return <div className="board">{rows}</div>;
  }
}
export default Board;
