import React, { Component } from "react";
import { Container } from "react-bootstrap";

export default class NavButton extends Component {
  render() {
    const { title, color } = this.props;
    return (
      <Container
        fluid
        as="div"
        className="d-flex flex-row flex-nowrap flex-content-between"
      >
        <div
          style={{
            borderRadius: "50%",
            backgroundColor: color,
            width: "20px",
            height: "20px",
          }}
        ></div>
        <div>
          <p>{title}</p>
        </div>
      </Container>
    );
  }
}
