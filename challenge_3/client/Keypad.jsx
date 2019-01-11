import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "react-bootstrap";
import Key from "./Key.jsx";

const Keypad = ({ handleClick, activeGame }) => {
  return (
    <Container id="keypad" className="border rounded p-4 mb-5 mt-4">
      <Row className="justify-content-center">
        <h3># of Pins To Hit</h3>
      </Row>
      {[[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]].map((row, idx) => {
        return (
          <Row key={idx}>
            {row.map((number, idx) => {
              return (
                <Col className="p-0" key={idx}>
                  <Key
                    handleClick={handleClick}
                    number={number}
                    activeGame={activeGame}
                  />
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
