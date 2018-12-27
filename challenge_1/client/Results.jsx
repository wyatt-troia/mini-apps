import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import axios from "axios";

// window.React = React;

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
    // $.ajax({
    //   url: this.props.url,
    //   data: { limit: this.props.perPage, offset: this.state.offset },
    //   dataType: "json",
    //   type: "GET",

    //   success: data => {
    //     this.setState({
    //       data: data.comments,
    //       pageCount: Math.ceil(data.meta.total_count / data.meta.limit)
    //     });
    //   },

    //   error: (xhr, status, err) => {
    //     console.error(this.props.url, status, err.toString());
    //   }
    // });
  }

  componentDidMount() {
    this.loadEventsFromServer();
  }

  handlePageClick(data) {
    // debugger;
    let selected = data.selected + 1;
    console.log(`page selected: ${selected}`);
    // let offset = Math.ceil(selected * this.props.perPage);

    // this.setState({ offset: offset }, () => {
    //   this.loadCommentsFromServer();
    // });
    this.setState({ page: selected }, () => {
      this.loadEventsFromServer();
    });
  }

  render() {
    return (
      <div className="results" id="results">
        <EventList events={this.state.events} />
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

// ReactDOM.render(
//   <App url={"http://localhost:3000/comments"} author={"adele"} perPage={10} />,
//   document.getElementById("react-paginate")
// );
