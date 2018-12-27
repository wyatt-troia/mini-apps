import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "react-bootstrap";
import SearchForm from "./SearchForm.jsx";
import Results from "./Results.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
    this.updateAppQuery = this.updateAppQuery.bind(this);
  }

  updateAppQuery(query) {
    this.setState({
      query
    });
  }
  render() {
    return (
      <Container>
        <Row className="mt-4">
          <Col md={12}>
            <h1>Historical Events Finder</h1>
            <SearchForm updateAppQuery={this.updateAppQuery} />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Results query={this.state.query} perPage={10} />
          </Col>
        </Row>
      </Container>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
