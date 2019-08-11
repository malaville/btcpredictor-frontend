import { Chart } from "frappe-charts/dist/frappe-charts.esm.js";
import { connect } from "react-redux";

import "frappe-charts/dist/frappe-charts.min.css";
import React from "react";

class ChartFrappe extends React.Component {
  componentDidUpdate() {
    if (this.props.data.data) {
      const parseData = {
        labels: this.props.data.data.map(x => x[0]),
        datasets: [
          {
            name: "Bitcoin Daily Value",
            type: "bar",
            values: this.props.data.data.map(x => x[1])
          }
        ]
      };
      const graph = new Chart("#chart2", {
        // or a DOM element,
        // new Chart() in case of ES6 module with above usage
        title: "Bitcoin indicators",
        data: parseData,
        type: "axis-mixed", // or 'bar', 'line', 'scatter', 'pie', 'percentage'
        height: 250,
        colors: ["#7cd6fd", "#743ee2"]
      });
    }
  }
  render() {
    return <div id="chart2" />;
  }
}

const mapStateToProps = state => ({
  data: state.data
});

export default connect(mapStateToProps)(ChartFrappe);
