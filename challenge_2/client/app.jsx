import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import MyChart from "./Chart.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log("App component mounted");
    axios
      .get("https://api.coindesk.com/v1/bpi/historical/close.json", {
        params: {
          start: "2018-01-01",
          end: "2018-12-27"
        }
      })
      .then(response => {
        console.log(response.data);
      });
  }
  render() {
    return (
      <Container className="mt-5">
        <Row>
          <Col>
            <h1>Bitcoin Value</h1>
            <MyChart />
          </Col>
        </Row>
      </Container>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
