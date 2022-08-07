import React, { Component } from "react";
import { Stack } from "react-bootstrap";
import Year from "./Year";

export default class Decade extends Component {
  years() {
    const years = new Array(10);
    const { startingYear, startDate } = this.props;
    for (let i = 0; i < years.length; i++) {
      const yearStartDate = startDate.plus({ years: i });
      years[i] = (
        <Year
          key={i}
          startingYear={startingYear + i}
          startDate={yearStartDate}
        />
      );
    }
    return years;
  }

  render() {
    return (
      <Stack className="mb-5" gap={2}>
        {this.years()}
      </Stack>
    );
  }
}
