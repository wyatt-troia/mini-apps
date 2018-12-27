import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "react-bootstrap";
import SearchForm from "./SearchForm.jsx";
import Results from "./Results.jsx";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      events: [],
      page: 1
    };
    this.updateAppQuery = this.updateAppQuery.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
    this.loadEventsFromServer = this.loadEventsFromServer.bind(this);
    this.updatePage = this.updatePage.bind(this);
  }

  updateAppQuery(query) {
    this.setState({
      query
    });
  }

  handleFormSubmission(e) {
    e.preventDefault();
    this.loadEventsFromServer();
  }

  loadEventsFromServer() {
    axios
      .get("/events", {
        params: {
          q: this.state.query,
          _page: this.state.page
        }
      })
      .then(response => {
        console.log(response);
        this.setState({
          events: response.data
        });
      })
      .catch(err => console.log(err));
  }

  updatePage(page) {
    this.setState(
      {
        page
      },
      this.loadEventsFromServer
    );
  }
  render() {
    return (
      <Container>
        <Row className="mt-4">
          <Col md={12}>
            <h1>Historical Events Finder</h1>
            <SearchForm
              updateAppQuery={this.updateAppQuery}
              submitHandler={this.handleFormSubmission}
            />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Results events={this.state.events} updatePage={this.updatePage} />
          </Col>
        </Row>
      </Container>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
