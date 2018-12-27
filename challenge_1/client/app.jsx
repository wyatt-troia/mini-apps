import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "react-bootstrap";

let element = (
  <Container>
    <Row>
      <Col md={12}>md=4</Col>
      {/* <Col md={{ span: 4, offset: 4 }}>{`md={{ span: 4, offset: 4 }}`}</Col> */}
    </Row>
  </Container>
);

ReactDOM.render(element, document.getElementById("root"));
