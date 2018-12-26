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
      board,
      winner: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.checkForWin = this.checkForWin.bind(this);
  }
  checkForWin(board) {
    // check for horizontal win
    for (let row = 0; row < board.length; row++) {
      let count = 0;
      for (let col = 0; col < board[0].length; col++) {
        let element = board[row][col];
        if (element === this.state.currentPlayer) {
          count++;
          if (count === 4) return true;
        } else {
          count = 0;
        }
      }
    }

    // check for vertical win
    for (let col = 0; col < board[0].length; col++) {
      let count = 0;
      for (let row = 0; row < board.length; row++) {
        let element = board[row][col];
        if (element === this.state.currentPlayer) {
          count++;
          if (count === 4) return true;
        } else {
          count = 0;
        }
      }
    }

    // check for major diagonal win
    for (let col = -2; col < 4; col++) {
      let count = 0;
      for (let row = 0; row < board.length; row++) {
        console.log(`col ${col} row ${row}`);
        let element = board[row][col + row];
        if (element === this.state.currentPlayer) {
          count++;
          if (count === 4) return true;
        } else {
          count = 0;
        }
      }
    }
  }
  handleClick(e) {
    // determine column selected
    let x = e.target.parentElement.getAttribute("x");
    let y = null;

    // determine how far down y axis the piece should fall
    // by finding first open circle in selected column
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

    // only allow move if there is an open circle in column
    if (y >= 0) {
      // create new board array reflecting current move
      let board = this.state.board.slice();
      board[y][x] = this.state.currentPlayer;

      // apply player's color to selected circle
      let xElems = document.querySelectorAll(`[x="${x}"]`);
      xElems = Array.from(xElems);
      let yElems = document.querySelectorAll(`[y="${y}"]`);
      yElems = Array.from(yElems);
      let elem = xElems.filter(elem => -1 !== yElems.indexOf(elem))[0]
        .children[0];
      elem.style.backgroundColor = this.state.playerColors[
        this.state.currentPlayer
      ];
      // debugger;
      // check for win
      if (this.checkForWin(board)) {
        var winner = this.state.currentPlayer;
        document.getElementById("result").innerHTML = `Player ${winner} wins!`;
      } else {
        var winner = null;
      }

      // update state with new current player and board
      this.setState(state => ({
        currentPlayer: state.currentPlayer === 1 ? 2 : 1,
        board,
        winner
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
