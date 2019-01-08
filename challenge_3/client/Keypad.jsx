import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "react-bootstrap";
import Key from "./Key.jsx";

const Keypad = props => {
  return (
    <Container id="keypad" className="border rounded p-4">
      {[[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]].map((row, idx) => {
        return (
          <Row key={idx}>
            {row.map((number, idx) => {
              return (
                <Col className="p-0" key={idx}>
                  <Key number={number} />
                </Col>
              );
            })}
          </Row>
        );
      })}
    </Container>
  );
};

export default Keypad;
