import React, { Component } from "react";
import Week from "./Week";
import { DateTime } from "luxon";

export default class Year extends Component {
  weeks() {
    const weeks = new Array(52);
    const { startDate } = this.props;
    for (let i = 0; i < weeks.length; i++) {
      const weekDate = startDate.plus({ days: i * 7 });
      weeks[i] = <Week {...this.props} key={i} weekDate={weekDate} />;
    }
    return weeks;
  }

  shouldComponentUpdate(newProps) {
    const hasFilterDate = newProps.filterDate;

    const currentYearAfterFilterYear =
      this.props.startDate.year >= newProps.filterDate.year;

    const startingYearBeforeCurrentYear =
      this.props.startDate.year <= DateTime.now().year;

    const filterHasChanged = this.props.filterDate
      ? this.props.filterDate.toMillis() !== newProps.filterDate.toMillis()
      : false;

    if (
      (hasFilterDate &&
        currentYearAfterFilterYear &&
        startingYearBeforeCurrentYear) ||
      (filterHasChanged && startingYearBeforeCurrentYear)
    ) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <div className="d-flex flex-row justify-content-between  align-items-center flex-nowrap">
        <div
          style={{
            height: "1rem",
            width: "1rem",
          }}
          className="d-flex flex-row justify-content-center align-items-center"
        >
          <p className="p-0 m-0 text-light" style={{ fontSize: "0.8rem" }}>
            {this.props.startingYear}
          </p>
        </div>
        {this.weeks()}
      </div>
    );
  }
}
