import React, { Component } from "react";
import { BsPlusCircleFill } from "react-icons/bs";

export default class AddButton extends Component {
  render() {
    const { clickHandler } = this.props;
    return (
      <div style={{ zIndex: 1 }}>
        <BsPlusCircleFill onClick={clickHandler} id="add-button" />
      </div>
    );
  }
}
