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
      <Container fluid className="h-100 p-0">
        <Row className="h-100 p-0 m-0">
          <Col sm={12} xl={3} className="ps-0 pe-0 h-100">
            <NavBar updateCalendar={this.updateCalendar} />
          </Col>
          <Col
            sm={12}
            xl={9}
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
