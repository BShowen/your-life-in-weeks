import React, { Component } from "react";
import { DateTime } from "luxon";

export default class Week extends Component {
  constructor(props) {
    super(props);
    this.hoverHandler = this.hoverHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  hoverHandler() {}

  isDeathDay() {
    const { weekDate, birthday } = this.props;
    const deathDate = birthday.plus({ years: 79, weeks: 41 });
    const diff = deathDate.diff(weekDate, "days").toObject().days;
    return diff === 0;
  }

  backgroundColor() {
    if (this.isDeathDay()) return "#E0FD82";

    const weekDateIsAfterFilterDate =
      this.props.weekDate >= this.props.filterDate;
    const weekDateIsBeforeToday = this.props.weekDate <= DateTime.now();
    if (
      this.props.filterDate &&
      weekDateIsAfterFilterDate &&
      weekDateIsBeforeToday
    ) {
      return this.props.backgroundColor;
      // return "white";
    }

    return "#193688";
  }

  shouldComponentUpdate(newProps) {
    const hasFilterDate = newProps.filterDate;

    const currentDateAfterFilter = this.props.weekDate >= newProps.filterDate;

    const currentDateBeforeToday = this.props.weekDate <= DateTime.now();

    const filterHasChanged = this.props.filterDate
      ? this.props.filterDate.toMillis() !== newProps.filterDate.toMillis()
      : false;

    if (
      (hasFilterDate && currentDateAfterFilter && currentDateBeforeToday) ||
      (filterHasChanged && currentDateBeforeToday)
    ) {
      return true;
    } else {
      return false;
    }
  }

  clickHandler() {
    alert(this.props.weekDate.toLocaleString());
  }

  render() {
    const style = {
      backgroundColor: this.backgroundColor(),
      borderRadius: "0.3rem",
      height: "1rem",
      width: "1rem",
    };
    return (
      <div
        style={style}
        onMouseOver={this.hoverHandler}
        onClick={this.clickHandler}
      ></div>
    );
  }
}
