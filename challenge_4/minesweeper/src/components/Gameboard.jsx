import React from "react";
import Row from "./Row.jsx";

const Gameboard = ({ tiles, onClick }) => {
  let tileRows = tiles.map((tileRow, idx) => (
    <Row tileRow={tileRow} key={idx} row={idx} onClick={onClick} />
  ));
  return <table className="Gameboard">{tileRows}</table>;
};

export default Gameboard;
