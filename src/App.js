import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import NavBar from "./components/NavBar";
import Calendar from "./components/Calendar";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Container fluid className="h-100">
        <Row className="h-100">
          <Col lg={2} className="ps-0 pe-0 h-100">
            <NavBar />
          </Col>
          <Col
            lg={10}
            className="ps-0 pe-0 h-100"
            style={{ overflow: "scroll" }}
          >
            <Calendar />
          </Col>
        </Row>
      </Container>
    );
  }
}
