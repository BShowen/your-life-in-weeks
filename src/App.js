import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Calendar from "./components/Calendar";
import { DateTime } from "luxon";

export default class App extends Component {
  constructor(props) {
    super(props);

    const birthday = DateTime.fromJSDate(new Date("08/08/1992"));
    this.state = {
      birthday: birthday,
      filterDate: "",
      color: "",
    };

    this.updateCalendar = this.updateCalendar.bind(this);
  }

  updateCalendar(filterDate, color) {
    this.setState({
      filterDate: filterDate,
      backgroundColor: color,
    });
  }

  render() {
    return (
      <Container
        fluid
        id="app-container"
        className="h-100 p-0 d-flex"
        style={{ maxWidth: "1600px" }}
      >
        <Sidebar updateCalendar={this.updateCalendar} />
        <Row className="w-100 h-100 p-0 m-0">
          <Col
            sm={12}
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
