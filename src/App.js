import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import NavBar from "./components/NavBar";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Container fluid className="h-100">
        <Row className="h-100">
          <Col lg={3} className="ps-0 pe-0 h-100">
            <NavBar />
          </Col>
          <Col lg={9} className="ps-0 pe-0 h-100">
            Column 2
          </Col>
        </Row>
      </Container>
    );
  }
}
