import React, { Component } from "react";
import ReactDOM from "react-dom";

const Square = ({ x, y, changeColor }) => (
  <span x={x} y={y} className="square">
    <div className="circle" onClick={changeColor} />
  </span>
);

export default Square;
