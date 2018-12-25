import React, { Component } from "react";
import ReactDOM from "react-dom";
import Square from "./Square.jsx";

const Row = ({ x, changeColor }) => {
  let yNums = [0, 1, 2, 3, 4, 5, 6];
  let squares = yNums.map(y => (
    <Square x={x} y={y} key={y} changeColor={changeColor} />
  ));
  return <div className="row">{squares}</div>;
};

export default Row;
