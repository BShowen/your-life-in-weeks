import React, { Component } from "react";
import { Container } from "react-bootstrap";
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
      <Container
        fluid
        className="d-flex flex-row flex-content-center flex-nowrap"
      >
        {this.year()}
      </Container>
    );
  }
}
