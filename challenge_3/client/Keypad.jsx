import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "react-bootstrap";
import Key from "./Key.jsx";

const Keypad = props => {
  return (
    <Container id="keypad">
      {[[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]].map(row => {
        return (
          <Row>
            {row.map(number => {
              return (
                <Col>
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
