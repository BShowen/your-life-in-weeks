import React, { Component } from "react";
import { Stack } from "react-bootstrap";
import Year from "./Year";
import { DateTime } from "luxon";

export default class Decade extends Component {
  years() {
    const years = new Array(10);
    const { startingYear, startDate } = this.props;
    for (let i = 0; i < years.length; i++) {
      const yearStartDate = startDate.plus({ years: i });
      years[i] = (
        <Year
          {...this.props}
          key={i}
          startingYear={startingYear + i}
          startDate={yearStartDate}
        />
      );
    }
    return years;
  }

  shouldComponentUpdate(newProps) {
    const hasFilterDate = newProps.filterDate;

    const currentDecadeAfterFilterDecade =
      this.props.startDate.year + 9 >= newProps.filterDate.year;

    const currentDecadeBeforeToday =
      this.props.startDate.year + 9 <= DateTime.now().year;

    const filterHasChanged = this.props.filterDate
      ? this.props.filterDate.toMillis() !== newProps.filterDate.toMillis()
      : false;

    if (
      (hasFilterDate &&
        currentDecadeAfterFilterDecade &&
        currentDecadeBeforeToday) ||
      (filterHasChanged && currentDecadeBeforeToday)
    ) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <Stack className="mb-5" gap={2}>
        {this.years()}
      </Stack>
    );
  }
}
