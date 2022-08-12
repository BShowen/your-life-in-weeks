import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Calendar from "./components/Calendar";
import { DateTime } from "luxon";
import ModalForm from "./components/ModalForm";
import BirthdayForm from "./components/BirthdayForm";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      birthday: "",
      filterDate: "",
      color: "",
      modalShowing: true,
    };

    this.updateCalendar = this.updateCalendar.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.setBirthday = this.setBirthday.bind(this);
  }

  updateCalendar(filterDate, color) {
    this.setState({
      filterDate: filterDate,
      backgroundColor: color,
    });
  }

  setBirthday(formParams) {
    if (this.state.birthday.length) return;
    this.setState({
      birthday: DateTime.fromISO(formParams.date),
    });
  }

  toggleModal() {
    this.setState({
      modalShowing: !this.state.modalShowing,
    });
  }

  render() {
    if (this.state.birthday) {
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
    } else {
      return (
        <ModalForm
          isShowing={this.state.modalShowing}
          toggle={this.toggleModal}
          title="Enter your birthday"
          onHide={() => {}}
          form={<BirthdayForm handleSubmit={this.setBirthday} />}
        />
      );
    }
  }
}
