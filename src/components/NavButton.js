import React, { Component } from "react";
import { Container } from "react-bootstrap";

export default class NavButton extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.setAsActiveButton();
  }

  render() {
    const { title, color } = this.props;
    const borderColor = this.props.active ? color : "#8610A8";
    return (
      <Container
        fluid
        as="div"
        className="d-flex flex-row flex-nowrap flex-content-between align-items-center"
        style={{
          backgroundColor: "#8610A8",
          border: `2px solid ${borderColor}`,
          height: "50px",
          gap: "10px",
          color: "#FFFFFF",
          borderRadius: "12px",
        }}
        onClick={this.handleClick}
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
          <p className="p-0 m-0">{title}</p>
        </div>
      </Container>
    );
  }
}
