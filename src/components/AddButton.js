import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import { BsPlusCircleFill } from "react-icons/bs";

export default class AddButton extends Component {
  render() {
    const { clickHandler } = this.props;
    return (
      <Nav.Item onClick={clickHandler}>
        <Nav.Link
          className="ps-2 pe-2 mt-1 mb-1 d-flex flex-row flex-nowrap align-items-center"
          style={{
            backgroundColor: "#8610A8",
            border: "2px solid #8610A8",
            height: "2.5rem",
            gap: "10px",
            color: "#FFFFFF",
            borderRadius: "12px",
          }}
        >
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              borderRadius: "50%",
              width: "20px",
              height: "20px",
            }}
          >
            <BsPlusCircleFill
              style={{ color: "#FFEA46", width: "100%", height: "100%" }}
            />
          </div>
          Add an event
        </Nav.Link>
      </Nav.Item>
    );
  }
}
