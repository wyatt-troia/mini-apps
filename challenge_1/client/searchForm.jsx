import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Form, Button } from "react-bootstrap";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ query: e.target.value });
    this.props.updateAppQuery(e.target.value);
  }

  render() {
    return (
      <Form>
        <Form.Group controlId="formSearchTerm">
          <Form.Label>Search for:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter search term"
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>
    );
  }
}

export default SearchForm;
