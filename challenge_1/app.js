var state = {
  activeGame: true,
  upNext: "X",
  advanceTurn: function() {
    if (this.upNext === "X") {
      this.upNext = "O";
    } else {
      this.upNext = "X";
    }
  },
  board: [["", "", ""], ["", "", ""], ["", "", ""]],
  numTurns: 0,
  playerNames: {
    X: prompt("Player X name:"),
    O: prompt("Player O name:")
  },
  playerColors: {
    X: "DarkRed",
    O: "black"
  },
  playerBackgroundColors: {
    X: "LightCoral",
    O: "DarkGray"
  },
  reset: function(winner) {
    this.upNext = winner || "X";
    this.board = [["", "", ""], ["", "", ""], ["", "", ""]];
    this.numTurns = 0;
    this.activeGame = true;
    var cells = document.querySelectorAll("td");
    for (var i = 0; i < cells.length; i++) {
      cells[i].innerHTML = "";
      cells[i].style.backgroundColor = "white";
    }
  },
  winner: "",
  winCounts: {
    X: 0,
    O: 0
  }
};

var view = {};
view.updateWinCountDiv = function() {
  let winCountDiv = document.getElementById("winCount");
  winCountDiv.innerHTML = `<b>Wins:</b><br>
  X - ${state.playerNames.X}: ${state.winCounts.X}<br>
  O - ${state.playerNames.O}: ${state.winCounts.O}`;
};
view.displayWinNotification = function(winner) {
  let div = document.getElementById("result_notification");
  div.innerHTML = `<b>${state.playerNames[winner]} wins!</b>`;
  div.style.fontSize = "3rem";
  div.style.color = state.playerColors[state.upNext];
};
view.displayTieNotification = function() {
  let div = document.getElementById("result_notification");
  div.innerHTML = `<b>Tie!</b>`;
  div.style.fontSize = "3rem";
};

// add click handlers to grid
let html_board = document.getElementById("board");
html_board.addEventListener("click", e => {
  if (e.target !== e.currentTarget && state.activeGame) {
    // get col and row index of clicked cell
    var rows = Array.from(document.getElementsByTagName("tr"));
    var rowIndex = rows.indexOf(event.target.parentNode);
    var cols = Array.from(event.target.parentNode.children);
    var colIndex = cols.indexOf(event.target);

    // update text in cell
    event.target.style.color = state.playerColors[state.upNext];
    event.target.style.backgroundColor =
      state.playerBackgroundColors[state.upNext];
    event.target.innerHTML = state.upNext;

    // update state model of board
    state.board[rowIndex][colIndex] = state.upNext;

    // check for and handle win or tie event
    if (hasWon("X")) {
      view.displayWinNotification("X");
      state.winner = "X";
      state.winCounts.X++;
      state.activeGame = false;
      view.updateWinCountDiv();
      return;
    }
    if (hasWon("O")) {
      view.displayWinNotification("O");
      state.winner = "O";
      state.winCounts.O++;
      state.activeGame = false;
      view.updateWinCountDiv();
      return;
    }
    state.numTurns++;
    if (state.numTurns === 9) {
      view.displayTieNotification();
      state.activeGame = false;
      return;
    }

    // update state in preparation for next turn
    state.advanceTurn();
  }
  e.stopPropagation();
});

// update page with player names
view.updateWinCountDiv();

function hasWon(player) {
  let board = state.board;
  // check for horizontal win
  for (let row = 0; row < board.length; row++) {
    let count = 0;
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] === player) count++;
    }
    if (count === 3) return true;
  }

  // check for vertical win
  for (let col = 0; col < board[0].length; col++) {
    let count = 0;
    for (let row = 0; row < board.length; row++) {
      if (board[row][col] === player) count++;
    }
    if (count === 3) return true;
  }

  // check for diagonal win
  if (
    board[0][0] === player &&
    board[1][1] === player &&
    board[2][2] === player
  )
    return true;
  if (
    board[0][2] === player &&
    board[1][1] === player &&
    board[2][0] === player
  )
    return true;
  return false;
}

// reset game when reset button is clicked
let resetButton = document.getElementById("reset");
resetButton.addEventListener("click", event => {
  state.reset();
  let div = document.getElementById("result_notification");
  div.innerHTML = ``;
});
