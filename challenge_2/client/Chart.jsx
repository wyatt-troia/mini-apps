import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "react-bootstrap";
import Chart from "chart.js";

class myChart extends Component {
  constructor(props) {
    super(props);
  }
  componentDidUpdate() {
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
  }
  render() {
    return <canvas id="chart" />;
  }
}

export default myChart;
