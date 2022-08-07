import React, { Component } from "react";
import Decade from "./Decade";

export default class Calendar extends Component {
  decades() {
    const decades = new Array(10);
    for (let i = 0; i < decades.length; i++) {
      const { birthday } = this.props;
      const decadeStartDate = birthday.plus({ years: i * 10 });
      decades[i] = (
        <Decade
          {...this.props}
          key={i}
          startingYear={i * 10}
          startDate={decadeStartDate}
        />
      );
    }
    return decades;
  }

  weekNumbers() {
    const weekNumbers = new Array(52);
    for (let i = 0; i < weekNumbers.length; i++) {
      weekNumbers[i] = (
        <p
          key={i}
          className="text-light text-center p-0 m-0"
          style={{ width: "25px" }}
        >
          {(i + 1).toString()}
        </p>
      );
    }
    return (
      <div className="d-flex flex-row justify-content-between flex-nowrap mb-3">
        {weekNumbers}
      </div>
    );
  }

  render() {
    return (
      <div
        style={{ backgroundColor: "#000000" }}
        gap={1}
        className="ps-2 pe-4 d-flex flex-column align-items-center"
      >
        <div className="d-flex justify-content-center align-items-center p-5">
          <h1 className="p-0 m-0 text-light">Your life in weeks</h1>
        </div>
        <div style={{ width: "85%" }}>
          {this.weekNumbers()}
          {this.decades()}
        </div>
      </div>
    );
  }
}
