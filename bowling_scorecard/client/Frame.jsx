import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "react-bootstrap";

const Frame = ({ frameNum, pinsHit, score }) => {
  let ball1;
  let ball2;
  let ball3;

  if (pinsHit[frameNum][0] === 10) {
    ball1 = "X";
    ball2 = pinsHit[frameNum][1] === 10 ? "X" : pinsHit[frameNum][1];
    ball3 = pinsHit[frameNum][2] === 10 ? "X" : pinsHit[frameNum][2];
  } else if (pinsHit[frameNum][0] + pinsHit[frameNum][1] === 10) {
    ball1 = pinsHit[frameNum][0];
    ball2 = "/";
    ball3 = pinsHit[frameNum][2];
  } else {
    ball1 = pinsHit[frameNum][0] || "";
    ball2 = pinsHit[frameNum][1] || "";
    ball3 = pinsHit[frameNum][2];
  }
  return (
    <div>
      <div className="text-center border-bottom main-border-color font-weight-bold">
        {frameNum + 1}
      </div>
      <div className="score-box">
        <div className="d-flex justify-content-end frame-score">
          <span className="border-left border-bottom main-border-color ball-score justify-content-center align-items-center d-flex">
            {ball1 || ""}
          </span>
          <span className="border-left border-bottom main-border-color ball-score justify-content-center align-items-center d-flex">
            {ball2 || ""}
          </span>
          {frameNum === 9 ? (
            <span className="border-left border-bottom main-border-color ball-score justify-content-center align-items-center d-flex">
              {ball3 || ""}
            </span>
          ) : (
            false
          )}
        </div>
        <div className="text-center">{score[frameNum] || ""}</div>
      </div>
    </div>
  );
};

export default Frame;
