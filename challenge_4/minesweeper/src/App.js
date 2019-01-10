import React, { Component } from "react";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import GameboardContainer from "./containers/GameboardContainer.jsx";

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col className=''>
            <GameboardContainer />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
