import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import axios from "axios";

class EventList extends Component {
  render() {
    let eventNodes = this.props.events.map(function(event, index) {
      return (
        <div key={index}>
          {event.date}: {event.description}
        </div>
      );
    });

    return (
      <div id="project-events" className="eventList">
        <ul>{eventNodes}</ul>
      </div>
    );
  }
}

class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      offset: 0,
      page: 1
    };
    this.loadEventsFromServer = this.loadEventsFromServer.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  loadEventsFromServer() {
    axios
      .get("/events", {
        params: {
          q: this.props.query,
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

  // componentDidMount() {
  //   this.loadEventsFromServer();
  // }

  handlePageClick(data) {
    let selected = data.selected + 1;
    console.log(`page selected: ${selected}`);

    // this.setState({ page: selected }, () => {
    //   this.loadEventsFromServer();
    // });
    this.props.updatePage(selected);
  }

  render() {
    return (
      <div className="results mt-4" id="results">
        <EventList events={this.props.events} />
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={"results"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    );
  }
}

export default Results;
