import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "react-bootstrap";
import Chart from "chart.js";

class myChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myChart: null,
      chartRefreshed: false
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if (!this.state.chartRefreshed) {
      if (this.state.myChart) {
        this.state.myChart.destroy();
      }
      let ctx = document.getElementById("chart");
      var myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: this.props.dates,
          datasets: [
            {
              label: "Value in USD",
              data: this.props.bpi,
              fill: false,
              borderColor: "#008BCD",
              backgroundColor: "#008BCD"
            }
          ]
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }
      });
      this.setState({ myChart, chartRefreshed: true });
    }
    if (
      prevProps.dates &&
      (prevProps.dates[0] !== this.props.dates[0] ||
        prevProps.dates[prevProps.dates.length - 1] !==
          this.props.dates[this.props.dates.length - 1])
    ) {
      this.setState({
        chartRefreshed: false
      });
    }
  }
  render() {
    return <canvas id="chart" />;
  }
}

export default myChart;
