import React, { Component } from "react";
import { BsPlusCircleFill } from "react-icons/bs";

export default class AddButton extends Component {
  render() {
    const { clickHandler } = this.props;
    return <BsPlusCircleFill onClick={clickHandler} id="add-button" />;
  }
}
