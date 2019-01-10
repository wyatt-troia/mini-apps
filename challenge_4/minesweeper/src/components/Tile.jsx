import React from "react";

const Tile = ({ tile, onClick }) => {
  return <td onClick={onClick} style={{fontWeight:tile.clicked ? 'bold' : 'normal'}}>{tile.containsMine ? "X" : tile.adjacentMineCount}</td>;
};

export default Tile;
