import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "react-bootstrap";
import Keypad from "./Keypad.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick(number) {
    console.log(`${number} clicked`);
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col xs={5}>
            <Keypad handleClick={this.handleClick} />
          </Col>
        </Row>
      </Container>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
