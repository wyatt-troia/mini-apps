import React from "react";

const Tile = ({ tile, onClick, result }) => {
  let adjacentMineCount =
    tile.adjacentMineCount > 0 ? tile.adjacentMineCount : "";
  if (!tile.clicked && result === "") {
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
          backgroundColor: tile.containsMine
            ? "#FA5757"
            : result === "win"
            ? "#12A3E1"
            : "#AF7E4D"
        }}
      >
        {tile.containsMine ? "X" : adjacentMineCount}
      </td>
    );
  }
};

export default Tile;
