import React, { Component } from "react";
import ReactDOM from "react-dom";

const Key = ({ number, handleClick, activeGame }) => {
  return (
    <div
      className="border rounded m-1 text-center p-2 key"
      onClick={() => {
        if (activeGame) {
          handleClick(number);
        }
      }}
    >
      {number}
    </div>
  );
};

export default Key;
