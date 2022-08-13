import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import DateInput from "./DateInput";
import { DateTime } from "luxon";

export default class BirthdayForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: {
        month: DateTime.now().month,
        day: DateTime.now().day,
        year: DateTime.now().year,
      },
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state.date);
  }

  onChange(e) {
    this.setState({
      date: e,
    });
  }

  render() {
    return (
      <Form onSubmit={this.handleFormSubmit}>
        <DateInput
          onChange={this.onChange}
          defaultValues={{ ...this.state.date }}
          className="mt-2"
        />
        <Form.Group className="d-flex mt-4 mb-2">
          <Button style={{ flexGrow: 1 }} type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>
    );
  }
}
