import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export default class NewCategoryForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      date: "",
      color: "#000000",
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
    const { title, date, color } = this.state;
    return (
      <Form onSubmit={this.handleFormSubmit}>
        <Form.Group className="mb-2">
          <Form.Label>Title</Form.Label>
          <Form.Control
            id="title"
            type="text"
            autoFocus
            required
            value={title}
            onChange={this.onChange}
          />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label>Start date</Form.Label>
          <Form.Control
            id="date"
            type="date"
            required
            value={date}
            onChange={this.onChange}
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Color</Form.Label>
          <Form.Control
            id="color"
            type="color"
            onChange={this.onChange}
            value={color}
          />
        </Form.Group>

        <Form.Group className="d-flex justify-content-end">
          <Button type="submit">Submit</Button>
        </Form.Group>
      </Form>
    );
  }
}
