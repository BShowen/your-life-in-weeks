import React, { Component } from "react";
import { Stack } from "react-bootstrap";
import Year from "./Year";

export default class Decade extends Component {
  decade() {
    const years = new Array(10);
    for (let i = 0; i < years.length; i++) {
      years[i] = <Year key={i} {...this.props} />;
    }
    return years;
  }

  render() {
    return (
      <Stack className="mb-5" gap={2}>
        {this.decade()}
      </Stack>
    );
  }
}
