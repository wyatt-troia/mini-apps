var state = {
  upNext: "X",
  advanceTurn: function() {
    if (this.upNext === "X") {
      this.upNext = "O";
    } else {
      this.upNext = "X";
    }
  }
};

// add click handlers to board cells
var cells = document.querySelectorAll("td");
for (var i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function(event) {
    debugger;
    event.target.innerHTML = state.upNext;
    state.advanceTurn.call(state);
    var rows = Array.from(document.getElementsByTagName("tr"));
    var rowIndex = rows.indexOf(event.target.parentNode);
    var cols = Array.from(event.target.parentNode.children);
    var colIndex = cols.indexOf(event.target);
    console.log(`clicked row ${rowIndex}, col ${colIndex}`);
  });
}
