import React from "react";
import Tile from "./Tile.jsx";

const Row = ({ tileRow, row, onClick, result }) => {
  let tiles = tileRow.map((tile, col) => (
    <Tile
      tile={tile}
      onClick={() => {
        if (result === "") onClick(row, col);
      }}
      result={result}
    />
  ));
  return <tr>{tiles}</tr>;
};

export default Row;
