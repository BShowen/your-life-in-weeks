import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import NavBar from "./components/NavBar";
import Calendar from "./components/Calendar";
import { DateTime } from "luxon";

export default class App extends Component {
  constructor(props) {
    super(props);

    const birthday = DateTime.fromJSDate(new Date("08/08/1992"));
    this.state = {
      birthday: birthday,
      maleLifeSpan: birthday.plus({ years: 79, weeks: 41 }),
    };
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
            <Calendar {...this.state} />
          </Col>
        </Row>
      </Container>
    );
  }
}
