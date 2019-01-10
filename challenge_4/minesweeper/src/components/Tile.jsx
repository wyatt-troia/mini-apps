import React from "react";

const Tile = ({ tile, row }) => {
  return <td>{tile.containsMine ? "X" : tile.adjacentMineCount}</td>;
};

export default Tile;
