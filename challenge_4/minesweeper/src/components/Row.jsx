import React from "react";
import Tile from "./Tile.jsx";

const Row = ({ tileRow, row, onClick }) => {
  let tiles = tileRow.map((tile, col) => (
    <Tile tile={tile} onClick={() => onClick(row, col)} />
  ));
  return <tr>{tiles}</tr>;
};

export default Row;
