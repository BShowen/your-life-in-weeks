import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import DateInput from "./DateInput";

export default class NewCategoryForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      date: {},
      color: "#ff00d4",
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
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

  onDateChange(date) {
    this.setState({
      date: date,
    });
  }

  render() {
    const { title, color } = this.state;
    return (
      <Form onSubmit={this.handleFormSubmit}>
        <Form.Group className="mb-2" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            autoFocus
            required
            value={title}
            onChange={this.onChange}
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="date">
          <Form.Label>Start date</Form.Label>
          <DateInput onChange={this.onDateChange} />
        </Form.Group>

        <Form.Group controlId="color">
          <Form.Label>Color</Form.Label>
          <Form.Control type="color" onChange={this.onChange} value={color} />
        </Form.Group>

        <Form.Group className="d-flex mt-4 mb-2">
          <Button style={{ flexGrow: 1 }} type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>
    );
  }
}
