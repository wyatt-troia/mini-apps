// add click handlers to board cells
var cells = document.querySelectorAll("td");
for (var i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function() {
    console.log("clicked");
  });
}
