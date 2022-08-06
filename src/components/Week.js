import React, { Component } from "react";
import { Container } from "react-bootstrap";

export default class Week extends Component {
  render() {
    const { backgroundColor } = this.props || "";
    const style = {
      backgroundColor: backgroundColor || "#193688",
      borderRadius: "50%",
    };
    return <Container style={style}></Container>;
  }
}
