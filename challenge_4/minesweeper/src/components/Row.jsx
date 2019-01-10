import React from "react";
import Tile from "./Tile.jsx";

const Row = ({ tileRow, row }) => {
  let tiles = tileRow.map(tile => <Tile tile={tile} row={row} />);
  return <tr>{tiles}</tr>;
};

export default Row;
