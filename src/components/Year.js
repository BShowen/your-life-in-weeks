import React, { Component } from "react";
import Week from "./Week";

export default class Year extends Component {
  weeks() {
    const weeks = new Array(52);
    const { startDate } = this.props;
    for (let i = 0; i < weeks.length; i++) {
      const weekDate = startDate.plus({ days: i * 7 });
      weeks[i] = <Week key={i} date={weekDate} />;
    }
    return weeks;
  }

  render() {
    return (
      <>
        <div
          className="d-flex flex-row justify-content-between flex-nowrap"
          style={{ position: "relative" }}
        >
          <p
            className="p-0 m-0 text-light"
            style={{ position: "absolute", left: "-30px" }}
          >
            {this.props.startingYear}
          </p>
          {this.weeks()}
        </div>
      </>
    );
  }
}
