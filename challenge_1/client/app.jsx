import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "react-bootstrap";
import SearchForm from "./SearchForm.jsx";

let element = (
  <Container>
    <Row className="mt-4">
      <Col md={12}>
        <h1>Historical Events Finder</h1>
        <SearchForm />
      </Col>
      {/* <Col md={{ span: 4, offset: 4 }}>{`md={{ span: 4, offset: 4 }}`}</Col> */}
    </Row>
  </Container>
);

ReactDOM.render(element, document.getElementById("root"));
