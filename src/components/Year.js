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
