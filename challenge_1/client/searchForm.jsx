import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Form, Button } from "react-bootstrap";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Form>
        <Form.Group controlId="formSearchTerm">
          <Form.Label>Search for:</Form.Label>
          <Form.Control type="text" placeholder="Enter search term" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>
    );
  }
}

export default SearchForm;
