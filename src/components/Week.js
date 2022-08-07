import React, { Component } from "react";

export default class Week extends Component {
  render() {
    const { backgroundColor } = this.props || "";
    const style = {
      backgroundColor: backgroundColor || "#193688",
      borderRadius: "50%",
      height: "25px",
      width: "25px",
    };
    return <div style={style}></div>;
  }
}
