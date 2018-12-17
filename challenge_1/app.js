var state = {
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
  reset: function(winner) {
    this.upNext = winner;
    this.board = [["", "", ""], ["", "", ""], ["", "", ""]];
    this.numTurns = 0;
    var cells = document.querySelectorAll("td");
    for (var i = 0; i < cells.length; i++) {
      cells[i].innerHTML = "";
    }
  }
};

// add click handlers to board cells
let html_board = document.getElementById("board");
html_board.addEventListener("click", e => {
  if (e.target !== e.currentTarget) {
    var rows = Array.from(document.getElementsByTagName("tr"));
    var rowIndex = rows.indexOf(event.target.parentNode);
    var cols = Array.from(event.target.parentNode.children);
    var colIndex = cols.indexOf(event.target);
    console.log(`clicked row ${rowIndex}, col ${colIndex}`);
    event.target.innerHTML = state.upNext;
    state.board[rowIndex][colIndex] = state.upNext;
    if (hasWon("X")) {
      alert(`Player X wins!`);
      state.reset("X");
      return;
    }
    if (hasWon("O")) {
      alert(`Player O wins!`);
      state.reset("O");
      return;
    }
    state.numTurns++;
    if (state.numTurns === 9) {
      alert("Tie!");
      state.reset("X");
      return;
    }
    state.advanceTurn.call(state);
  }
  e.stopPropagation();
});

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
});
