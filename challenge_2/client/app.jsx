import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import MyChart from "./Chart.jsx";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import moment from "../node_modules/moment/src/moment";
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController
} from "react-dates";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bpi: [],
      startDate: moment("2018-01-01"),
      endDate: moment().subtract(1, "days"),
      focusedInput: ""
    };
    this.fetchData = this.fetchData.bind(this);
  }
  fetchData() {
    if (this.state.startDate.isBefore(this.state.endDate)) {
      console.log(this.state.startDate.format("YYYY-MM-DD"));
      axios
        .get("https://api.coindesk.com/v1/bpi/historical/close.json", {
          params: {
            start: this.state.startDate.format("YYYY-MM-DD"),
            end: this.state.endDate.format("YYYY-MM-DD")
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
  }
  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <Container className="mt-3">
        <Row>
          <Col>
            <h1 className="text-center">Bitcoin Value</h1>
            <div
              id="date-picker"
              className="d-flex justify-content-center mt-3 mb-2"
            >
              <DateRangePicker
                startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                onDatesChange={({ startDate, endDate }) => {
                  console.log(`start: ${startDate} end ${endDate}`);
                  this.setState({ startDate, endDate }, this.fetchData);
                }} // PropTypes.func.isRequired,
                focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                isOutsideRange={day =>
                  day.isBefore("2010-07-17") ||
                  day.isAfter(moment().subtract(1, "days"))
                }
              />
            </div>
            <MyChart bpi={this.state.bpi} dates={this.state.dates} />
            <p className="text-muted text-center">
              Powered By{" "}
              <a href="https://www.coindesk.com/price/bitcoin">Coindesk</a>
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
