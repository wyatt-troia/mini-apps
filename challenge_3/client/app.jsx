import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "react-bootstrap";
import Keypad from "./Keypad.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Keypad />
          </Col>
        </Row>
      </Container>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
