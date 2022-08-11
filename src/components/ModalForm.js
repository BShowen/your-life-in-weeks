import React, { Component } from "react";
import { Modal, Container, Row, Col, Form, Button } from "react-bootstrap";
import AddButton from "./AddButton";

export default class ModalForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showing: false,
      formParams: { title: "", date: "", color: "" },
    };

    this.toggle = this.toggle.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  toggle() {
    this.setState({
      showing: !this.state.showing,
      formParams: { title: "", date: "", color: "" },
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.toggle();
    this.props.addNewCategory(this.state.formParams);
  }

  onChange(e) {
    e.preventDefault();
    this.setState(
      {
        formParams: {
          ...this.state.formParams,
          [e.target.id]: e.target.value,
        },
      },
      () => {
        console.log(this.state.formParams);
      }
    );
  }

  render() {
    if (this.state.showing) {
      return (
        <Modal show={this.state.showing} onHide={this.toggle}>
          <Modal.Header closeButton>
            <Modal.Title>Add a new category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                <Col>
                  <Form onSubmit={this.handleFormSubmit}>
                    <Form.Group className="mb-2">
                      <Form.Label>Title</Form.Label>
                      <Form.Control
                        id="title"
                        type="text"
                        autoFocus
                        required
                        value={this.state.formParams.title}
                        onChange={this.onChange}
                      />
                    </Form.Group>

                    <Form.Group className="mb-2">
                      <Form.Label>Start date</Form.Label>
                      <Form.Control
                        id="date"
                        type="date"
                        required
                        value={this.state.formParams.date}
                        onChange={this.onChange}
                      ></Form.Control>
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Color</Form.Label>
                      <Form.Control
                        id="color"
                        type="color"
                        onChange={this.onChange}
                      />
                    </Form.Group>

                    <Form.Group className="d-flex justify-content-end">
                      <Button type="submit">Submit</Button>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </Modal>
      );
    } else {
      return <AddButton clickHandler={this.toggle} />;
    }
  }
}
