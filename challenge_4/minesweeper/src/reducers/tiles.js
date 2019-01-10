let rowLength = 10;
let rowCount = 10;
let mineCount = 10;

// set up empty board
let initialTiles = [];
for (let i = 0; i < rowCount; i++) {
  initialTiles.push([]);
  for (let j = 0; j < rowLength; j++) {
    initialTiles[i].push({ containsMine: false, clicked: false });
  }
}

// plant mines at random locations
let mineLocations = [];
while (mineLocations.length < mineCount) {
  let potentialLocation = Math.floor(Math.random() * (rowCount * rowLength));
  if (!mineLocations.includes(potentialLocation)) {
    mineLocations.push(potentialLocation);
  }
}
mineLocations.forEach(location => {
  let row = Math.floor(location / rowLength);
  let col = location - row * rowLength;
  initialTiles[row][col].containsMine = true;
});

// calculate adjacent mine counts for each tile
const calculateAdjacentMineCount = (row, col) => {
  let count = 0;
  // count adjacent tiles in previous row
  for (let searchCol = col - 1; searchCol < col + 2; searchCol++) {
    if (
      initialTiles[row - 1] &&
      initialTiles[row - 1][searchCol] &&
      initialTiles[row - 1][searchCol].containsMine
    ) {
      count++;
    }
  }
  // count adjacent tiles in current row
  for (let searchCol = col - 1; searchCol < col + 2; searchCol++) {
    if (
      initialTiles[row] &&
      initialTiles[row][searchCol] &&
      initialTiles[row][searchCol].containsMine
    ) {
      count++;
    }
  }
  // count adjacent tiles in next row
  for (let searchCol = col - 1; searchCol < col + 2; searchCol++) {
    if (
      initialTiles[row + 1] &&
      initialTiles[row + 1][searchCol] &&
      initialTiles[row + 1][searchCol].containsMine
    ) {
      count++;
    }
  }

  return count;
};

for (let row = 0; row < rowCount; row++) {
  for (let col = 0; col < rowLength; col++) {
    initialTiles[row][col].adjacentMineCount = calculateAdjacentMineCount(
      row,
      col
    );
  }
}

console.log(initialTiles);

export const reducer = (
  state = { result: "", tilesClicked: 0, tiles: initialTiles },
  action
) => {
  switch (action.type) {
    case "CLICK_TILE":
      let newTiles = [];
      state.tiles.forEach(row => {
        let newRow = [];
        row.forEach(tile => newRow.push(Object.assign({}, tile)));
        newTiles.push(newRow);
      });
      let clickedTile = newTiles[action.row][action.col];
      clickedTile.clicked = true;

      let newTilesClicked = state.tilesClicked + 1;

      let newResult;
      let totalTileCount = rowCount * rowLength;
      if (newTilesClicked === totalTileCount - mineCount) {
        newResult = "win";
      } else if (clickedTile.containsMine) {
        newResult = "loss";
      }

      return {
        result: newResult,
        tilesClicked: newTilesClicked,
        tiles: newTiles
      };
    default:
      return state;
  }
};
