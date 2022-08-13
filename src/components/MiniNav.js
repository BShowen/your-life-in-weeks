import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import NavBrand from "./NavBrand";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import TippyButton from "./TippyButton";

export default class MiniNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tippyActive: false,
    };

    this.setChevron = this.setChevron.bind(this);
  }

  setChevron({ rotate }) {
    this.setState({
      tippyActive: rotate,
    });
  }

  render() {
    const navButtons = this.props.navButtons.length
      ? this.props.navButtons
      : false;

    return (
      <Tippy
        interactive={true}
        trigger="click"
        hideOnClick={true}
        onHide={() => {
          this.setChevron({ rotate: false });
        }}
        onShow={() => {
          this.setChevron({ rotate: true });
        }}
        content={
          <div>
            <NavBrand />
            <Nav className="flex-column w-100">
              <div
                className={`${navButtons ? "" : "d-none"}`}
                style={{
                  maxHeight: "75vw",
                  borderRadius: "0.5rem",
                  overflow: "scroll",
                  padding: "10px",
                  backgroundColor: "#4D4D4D",
                }}
              >
                {navButtons}
              </div>
              <hr />
              {this.props.createNewCategoryButton}
            </Nav>
          </div>
        }
      >
        <div id="tippy-button">
          <TippyButton active={this.state.tippyActive} />
        </div>
      </Tippy>
    );
  }
}
