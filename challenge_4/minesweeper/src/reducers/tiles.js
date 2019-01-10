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
      // make copy of tiles object to avoid mutating current state
      let newTiles = [];
      state.tiles.forEach(row => {
        let newRow = [];
        row.forEach(tile => newRow.push(Object.assign({}, tile)));
        newTiles.push(newRow);
      });

      let clickedTile = newTiles[action.row][action.col];

      // recursively click clicked tile and all adjacent tiles until hitting wall or tile adjacent to a mine
      (function contagiousClick(row, col) {
        // debugger;
        // if coordinate isn't on board or has been clicked, return
        if (
          !newTiles[row] ||
          !newTiles[row][col] ||
          newTiles[row][col].clicked
        ) {
          return;
        }

        // click new tile
        let newClickedTile = newTiles[row][col];
        newClickedTile.clicked = true;

        // if tile has no adjacent mines, attempt to click on adjacent tiles
        if (newTiles[row][col].adjacentMineCount === 0) {
          // click on adjacent tiles in previous row
          for (let nextCol = col - 1; nextCol < col + 2; nextCol++) {
            if (newTiles[row - 1]) {
              contagiousClick(row - 1, nextCol);
            }
          }
          // click on adjacent tiles in current row
          contagiousClick(row, col - 1);
          contagiousClick(row, col + 1);

          // click on adjacent tiles in next row
          for (let nextCol = col - 1; nextCol < col + 2; nextCol++) {
            if (newTiles[row + 1]) {
              contagiousClick(row + 1, nextCol);
            }
          }
        }
      })(action.row, action.col);

      // update click count
      let newTilesClicked = 0;
      for (let row = 0; row < rowCount; row++) {
        for (let col = 0; col < rowLength; col++) {
          if (newTiles[row][col].clicked) newTilesClicked++;
        }
      }

      // check for win or loss
      let newResult = "";
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
