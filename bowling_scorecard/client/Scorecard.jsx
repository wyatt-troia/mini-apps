import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "react-bootstrap";
import Frame from "./Frame.jsx";

const Scorecard = ({ pinsHit, score }) => {
  return (
    <Container>
      <Row id="scorecard-row">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((frameNum, idx) => (
          <Col
            className="border-left border-top border-bottom frame-col p-0"
            key={idx}
          >
            <Frame frameNum={frameNum} pinsHit={pinsHit} score={score} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Scorecard;
