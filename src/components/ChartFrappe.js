import { Chart } from "frappe-charts/dist/frappe-charts.esm.js";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "frappe-charts/dist/frappe-charts.min.css";
import React from "react";

class ChartFrappe extends React.Component {
  static propTypes = {
    indicator: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired
  };

  componentDidUpdate() {
    if (this.props.data[this.props.indicator]) {
      const parseData = {
        labels: this.props.data[this.props.indicator].map(x => x[0]),
        datasets: [
          {
            name: "Bitcoin Daily Value",
            type: "bar",
            values: this.props.data[this.props.indicator].map(x => x[1])
          }
        ]
      };
      const graph = new Chart("#" + this.props.indicator + "-chart", {
        // or a DOM element,
        // new Chart() in case of ES6 module with above usage
        title: "Bitcoin indicators : " + this.props.indicator,
        data: parseData,
        type: "axis-mixed", // or 'bar', 'line', 'scatter', 'pie', 'percentage'
        height: 250,
        colors: ["#7cd6fd", "#743ee2"]
      });
    }
  }
  render() {
    return <div id={this.props.indicator + "-chart"} />;
  }
}

const mapStateToProps = state => {
  console.log(state.data);
  return {
    data: state.data
  };
};

export default connect(mapStateToProps)(ChartFrappe);
