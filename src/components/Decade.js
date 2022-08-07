import React, { Component } from "react";
import { Stack } from "react-bootstrap";
import Year from "./Year";

export default class Decade extends Component {
  decades() {
    const years = new Array(10);
    const { startingYear } = this.props;
    for (let i = 0; i < years.length; i++) {
      years[i] = (
        <Year key={i} {...this.props} startingYear={startingYear + i} />
      );
    }
    return years;
  }

  render() {
    return (
      <Stack className="mb-5" gap={2}>
        {this.decades()}
      </Stack>
    );
  }
}
