import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "react-bootstrap";
import Keypad from "./Keypad.jsx";
import Scorecard from "./Scorecard.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { frame: 0, ball: 0, points: [] };
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
        <Row>
          <Scorecard />
        </Row>
      </Container>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
