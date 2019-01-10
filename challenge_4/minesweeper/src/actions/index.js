export const clickTile = (row, col) => ({
  type: "CLICK_TILE",
  row,
  col
});

export const resetGame = () => ({
  type: "RESET_GAME"
});
