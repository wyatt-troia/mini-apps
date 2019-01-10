import React from "react";
import Row from "./Row.jsx";

const Gameboard = ({ tiles }) => {
  let tileRows = tiles.map((tileRow, idx) => (
    <Row tileRow={tileRow} key={idx} row={idx} />
  ));
  return <table>{tileRows}</table>;
};

export default Gameboard;
