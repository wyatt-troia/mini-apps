import React, { Component } from "react";
import ReactDOM from "react-dom";

const Square = ({ x, y, handleClick }) => (
  <span x={x} y={y} className="square">
    <div className="circle" onClick={handleClick} />
  </span>
);

export default Square;
