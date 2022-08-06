import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";

export default class NavAddButton extends Component {
  render() {
    const { clickHandler } = this.props;
    return (
      <Container
        as="div"
        fluid
        className="d-flex flex-row justify-content-start"
      >
        <Button variant="primary" onClick={clickHandler}>
          +
        </Button>
      </Container>
    );
  }
}
