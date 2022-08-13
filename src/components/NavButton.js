import React, { Component } from "react";
import { Nav, Stack, Button } from "react-bootstrap";
import { hideAll } from "tippy.js";
import { RiDeleteBack2Line } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import { CgMoreO } from "react-icons/cg";

export default class NavButton extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.editCategory = this.editCategory.bind(this);
  }

  handleClick(e) {
    hideAll({ duration: 250 });
    e.preventDefault();
    this.props.toggleActive();
  }

  editCategory(e) {
    e.stopPropagation();
    this.props.editCategory();
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
            minHeight: "3rem",
            gap: "10px",
            color: "#FFFFFF",
            borderRadius: "12px",
            width: "300px",
            fontSize: "1.4rem",
          }}
          onClick={this.handleClick}
        >
          <div
            style={{
              borderRadius: "50%",
              backgroundColor: color,
              width: "30px",
              height: "30px",
            }}
          />
          <div className="me-auto">
            <p className="p-0 m-0">{title}</p>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <Tippy
              theme="light"
              interactive={true}
              trigger={"click mouseenter"}
              content={
                <Stack className="pt-2 pb-2" gap={2}>
                  <Button
                    className="d-flex align-items-center justify-content-between ps-2 pe-2"
                    onClick={this.editCategory}
                    style={{
                      height: "2.5rem",
                    }}
                  >
                    Edit &nbsp;
                    <TbEdit
                      style={{
                        height: "1.4rem",
                        width: "1.4rem",
                        color: "#FFC107",
                      }}
                    />
                  </Button>
                  <Button
                    className="d-flex align-items-center justify-content-between ps-2 pe-2"
                    onClick={(e) => {
                      this.props.delete(e, id);
                    }}
                    style={{ height: "2.5rem" }}
                  >
                    Delete &nbsp;
                    <RiDeleteBack2Line
                      style={{
                        height: "1.4rem",
                        width: "1.4rem",
                        color: "#DC3545",
                      }}
                    />
                  </Button>
                </Stack>
              }
            >
              <div
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <CgMoreO
                  style={{
                    width: "30px",
                    height: "30px",
                  }}
                />
              </div>
            </Tippy>
          </div>
        </Nav.Link>
      </Nav.Item>
    );
  }
}
