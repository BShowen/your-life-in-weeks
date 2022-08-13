import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import { hideAll } from "tippy.js";
import { RiDeleteBack2Line } from "react-icons/ri";

export default class NavButton extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    hideAll({ duration: 250 });
    e.preventDefault();
    this.props.toggleActive();
  }

  render() {
    const { title, color, id } = this.props;
    const borderColor = this.props.active ? color : "#8610A8";
    return (
      <Nav.Item>
        <Nav.Link
          className="ps-2 pe-2 mt-1 mb-1 d-flex flex-row flex-nowrap align-items-center"
          style={{
            backgroundColor: "#8610A8",
            border: `2px solid ${borderColor}`,
            height: "2.5rem",
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
          />
          <div className="me-auto">
            <p className="p-0 m-0">{title}</p>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <RiDeleteBack2Line
              onClick={(e) => {
                this.props.delete(e, id);
              }}
              style={{ height: "1.4rem", width: "1.4rem", color: "#DC3545" }}
            />
          </div>
        </Nav.Link>
      </Nav.Item>
    );
  }
}
