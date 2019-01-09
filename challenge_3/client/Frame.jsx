import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "react-bootstrap";

const Frame = ({ frameNum }) => {
  return (
    <div>
      <div className="text-center border-bottom main-border-color">
        {frameNum + 1}
      </div>
      <div>
        <div className="d-flex justify-content-end frame-score">
          <span className="border-left border-bottom main-border-color ball-score justify-content-center align-items-center d-flex">
            1
          </span>
          <span className="border-left border-bottom main-border-color ball-score justify-content-center align-items-center d-flex">
            2
          </span>
        </div>
        <div className="text-center">3</div>
      </div>
    </div>
  );
};

export default Frame;
