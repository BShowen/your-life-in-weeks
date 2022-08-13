import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import DateInput from "./DateInput";

export default class BirthdayForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: {},
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
        <DateInput onChange={this.onChange} />
        <Form.Group className="d-flex justify-content-end">
          <Button type="submit">Submit</Button>
        </Form.Group>
      </Form>
    );
  }
}
