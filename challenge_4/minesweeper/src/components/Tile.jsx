import React from "react";

const Tile = ({ tile, onClick }) => {
  return <td onClick={onClick}>{tile.containsMine ? "X" : tile.adjacentMineCount}</td>;
};

export default Tile;
