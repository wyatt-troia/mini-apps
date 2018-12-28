import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import MyChart from "./Chart.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bpi: [],
      dates: []
    };
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
        let bpi = Object.values(response.data.bpi);
        let dates = Object.keys(response.data.bpi);
        this.setState({
          bpi,
          dates
        });
      });
  }
  render() {
    return (
      <Container className="mt-5">
        <Row>
          <Col>
            <h1>Bitcoin Value</h1>
            <MyChart bpi={this.state.bpi} dates={this.state.dates} />
          </Col>
        </Row>
      </Container>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
