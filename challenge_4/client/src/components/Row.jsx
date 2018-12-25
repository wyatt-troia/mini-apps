import React, { Component } from "react";
import ReactDOM from "react-dom";
import Square from "./Square.jsx";

const Row = ({ y, handleClick }) => {
  let xNums = [0, 1, 2, 3, 4, 5, 6];
  let squares = xNums.map(x => (
    <Square x={x} y={y} key={x} handleClick={handleClick} />
  ));
  return <div className="row">{squares}</div>;
};

export default Row;
