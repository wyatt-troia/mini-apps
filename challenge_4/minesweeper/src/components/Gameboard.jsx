import React from "react";
import Row from "./Row.jsx";

const Gameboard = ({ tiles, onClick, result }) => {
  let tileRows = tiles.map((tileRow, idx) => (
    <Row tileRow={tileRow} key={idx} row={idx} onClick={onClick} />
  ));

  let resultMessage;
  if (result === "loss") resultMessage = "You lost";
  if (result === "win") resultMessage = "You win!";
  return (
    <React.Fragment>
      <h1 className="mt-3">Minesweeper</h1>
      <table className="Gameboard mb-3 mt-4">{tileRows}</table>
      {result ? <h3 id="result">{resultMessage}</h3> : false}
    </React.Fragment>
  );
};

export default Gameboard;
