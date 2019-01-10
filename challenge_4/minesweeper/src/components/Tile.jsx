import React from "react";

const Tile = ({ tile, onClick }) => {
  let adjacentMineCount =
    tile.adjacentMineCount > 0 ? tile.adjacentMineCount : "";
  if (!tile.clicked) {
    return (
      <td
        onClick={onClick}
        style={{
          backgroundColor: "#36952F"
        }}
      />
    );
  } else {
    return (
      <td
        style={{
          fontWeight: tile.adjacentMineCount > 0 ? "bold" : "normal",
          backgroundColor: tile.containsMine ? "#ff1a1a" : "#AF7E4D"
        }}
      >
        {tile.containsMine ? "X" : adjacentMineCount}
      </td>
    );
  }
};

export default Tile;
