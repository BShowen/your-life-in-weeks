import React, { Component } from "react";

export default class Week extends Component {
  constructor(props) {
    super(props);
    this.hoverHandler = this.hoverHandler.bind(this);
  }

  hoverHandler() {}

  isDeathDay() {
    const { weekDate, maleLifeSpan } = this.props;
    const diff = maleLifeSpan.diff(weekDate, "days").toObject().days;
    return diff === 0;
  }

  backgroundColor() {
    if (this.isDeathDay()) return "#E0FD82";

    const backgroundColor = this.props.backgroundColor
      ? this.props.backgroundColor
      : "#193688";

    return backgroundColor;
  }

  render() {
    const style = {
      backgroundColor: this.backgroundColor(),
      borderRadius: "50%",
      height: "25px",
      width: "25px",
    };
    return <div style={style} onMouseOver={this.hoverHandler}></div>;
  }
}
