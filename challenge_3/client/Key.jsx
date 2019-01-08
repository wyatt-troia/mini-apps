import React, { Component } from "react";
import ReactDOM from "react-dom";

const Key = ({ number, handleClick }) => {
  return (
    <div
      className="border rounded m-1 text-center p-4"
      onClick={() => handleClick(number)}
    >
      {number}
    </div>
  );
};

export default Key;
