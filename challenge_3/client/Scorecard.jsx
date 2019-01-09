import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "react-bootstrap";
import Frame from "./Frame.jsx";

const Scorecard = props => {
  return (
    <Container>
      <Row id="scorecard-row">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(frameNum => (
          <Col className="border-left border-top border-bottom frame-col p-0">
            <Frame frameNum={frameNum} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Scorecard;
