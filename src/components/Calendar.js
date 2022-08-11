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
    const weekNumbers = new Array(53);
    for (let i = 0; i < weekNumbers.length; i++) {
      weekNumbers[i] = (
        <div
          key={i}
          style={{ width: "1rem" }}
          className="d-flex flex-row justify-content-center align-items-center"
        >
          <p className="text-light text-center p-0 m-0">{i.toString()}</p>
        </div>
      );
    }
    return (
      <div
        className="d-none d-md-flex flex-row justify-content-between flex-nowrap mb-3 pt-2 pb-2"
        style={{
          backgroundColor: "#3B37A1",
          borderRadius: "0.2rem",
          fontSize: "0.8rem",
        }}
      >
        {weekNumbers}
      </div>
    );
  }

  render() {
    return (
      <div
        style={{ backgroundColor: "#000000" }}
        className="ps-sm-1 pe-sm-1 ps-xl-3 pe-xl-3 ps-xxl-5 pe-xxl-5 pt-2 d-flex flex-column"
      >
        <div className="d-flex justify-content-center align-items-center p-2 p-lg-5">
          <h1 className="p-0 m-0 text-light">Your life in weeks</h1>
        </div>
        <div>
          {this.weekNumbers()}
          {this.decades()}
        </div>
      </div>
    );
  }
}
