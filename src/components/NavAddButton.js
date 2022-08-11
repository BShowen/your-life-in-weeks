import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";

export default class NavAddButton extends Component {
  render() {
    const { clickHandler } = this.props;
    return (
      <div
        // as="div"
        // fluid
        // className="d-flex flex-row justify-content-start"
        style={{ border: "1px solid red" }}
      >
        <Button variant="primary" onClick={clickHandler}>
          +
        </Button>
      </div>
    );
  }
}
