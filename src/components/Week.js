import React, { Component } from "react";

export default class Week extends Component {
  constructor(props) {
    super(props);
    this.hoverHandler = this.hoverHandler.bind(this);
  }

  hoverHandler() {
    const { date } = this.props;
    console.log(date.toLocaleString());
  }

  render() {
    const { backgroundColor } = this.props || "";
    const style = {
      backgroundColor: backgroundColor || "#193688",
      borderRadius: "50%",
      height: "25px",
      width: "25px",
    };
    return <div style={style} onMouseOver={this.hoverHandler}></div>;
  }
}
