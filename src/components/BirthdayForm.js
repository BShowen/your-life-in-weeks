import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export default class BirthdayForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: "",
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
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  render() {
    const { date } = this.state;
    return (
      <Form onSubmit={this.handleFormSubmit}>
        <Form.Group className="mb-2">
          <Form.Control
            id="date"
            type="date"
            required
            value={date}
            onChange={this.onChange}
          />
        </Form.Group>

        <Form.Group className="d-flex justify-content-end">
          <Button type="submit">Submit</Button>
        </Form.Group>
      </Form>
    );
  }
}
