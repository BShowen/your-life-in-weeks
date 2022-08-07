import React, { Component } from "react";
import Week from "./Week";

export default class Year extends Component {
  year() {
    const weeks = new Array(52);
    for (let i = 0; i < weeks.length; i++) {
      weeks[i] = <Week key={i} {...this.props} />;
    }
    return weeks;
  }
  render() {
    return (
      <div className="d-flex flex-row justify-content-between flex-nowrap">
        {this.year()}
      </div>
    );
  }
}
