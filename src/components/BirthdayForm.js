import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { DateTime } from "luxon";

export default class BirthdayForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      month: DateTime.now().month,
      day: DateTime.now().day,
      year: DateTime.now().year,
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state);
  }

  onChange(e) {
    e.preventDefault();

    const newDate = {
      ...this.state,
      [e.target.id]: Number.parseInt(e.target.value),
    };

    const date = DateTime.fromObject(newDate);

    if (date.isValid) {
      this.setState(newDate);
    } else {
      this.setState({ ...newDate, day: 1 });
    }
  }

  getDayOptions() {
    const numberOfDays = DateTime.fromObject(this.state).daysInMonth;
    const options = [];
    for (let day = 1; day <= numberOfDays; day++) {
      options.push(
        <option key={day} value={day}>
          {day}
        </option>
      );
    }
    return options;
  }

  getYearOptions() {
    const endYear = DateTime.now().year;
    const yearOptions = [];
    for (let i = 0; i <= 100; i++) {
      const year = endYear - i;
      yearOptions.unshift(
        <option key={year} value={year}>
          {year}
        </option>
      );
    }
    return yearOptions;
  }

  render() {
    return (
      <Form onSubmit={this.handleFormSubmit}>
        <div className="d-flex flex-row justify-content-evenly">
          <Form.Group>
            <Form.Select
              onChange={this.onChange}
              value={this.state.month}
              id="month"
            >
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </Form.Select>
          </Form.Group>

          <Form.Group>
            <Form.Select
              onChange={this.onChange}
              value={this.state.day}
              id="day"
            >
              {this.getDayOptions()}
            </Form.Select>
          </Form.Group>

          <Form.Group>
            <Form.Select
              onChange={this.onChange}
              value={this.state.year}
              id="year"
            >
              {this.getYearOptions()}
            </Form.Select>
          </Form.Group>
        </div>

        <Form.Group className="d-flex justify-content-end">
          <Button type="submit">Submit</Button>
        </Form.Group>
      </Form>
    );
  }
}
