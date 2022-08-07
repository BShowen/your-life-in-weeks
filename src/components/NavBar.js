import React, { Component } from "react";
import { Container, Nav } from "react-bootstrap";
import NavButton from "./NavButton";
import NavAddButton from "./NavAddButton";
import { DateTime } from "luxon";

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navButtons: [
        {
          title: "Started my business",
          color: "#FBAE14",
          id: 0,
          date: DateTime.fromJSDate(new Date("02/16/2016")),
        },
        {
          title: "Bought my house",
          color: "#FF3F52",
          id: 1,
          date: DateTime.fromJSDate(new Date("08/16/2021")),
        },
        {
          title: "Started Coding",
          color: "#00F0AC",
          id: 2,
          date: DateTime.fromJSDate(new Date("06/16/2018")),
        },
      ],
      activeButton: {},
    };

    this.createNewCategory = this.createNewCategory.bind(this);
    this.setActiveNavButton = this.setActiveNavButton.bind(this);
  }

  navButtons() {
    const navButtons = this.state.navButtons.map((button, i) => {
      return (
        <NavButton
          key={i}
          {...button}
          setAsActiveButton={this.setActiveNavButton.bind(this, button.id)}
          active={this.state.activeButton.id === button.id}
        />
      );
    });
    return (
      <Container
        fluid
        className="d-flex flex-column justify-content-start"
        style={{ gap: "15px" }}
      >
        {navButtons}
      </Container>
    );
  }

  createNewCategory() {
    console.log("NavAddButton clicked");
  }

  setActiveNavButton(id) {
    const activeButton = this.state.navButtons.find(
      (button) => button.id === id
    );

    this.setState({
      activeButton: activeButton,
    });

    this.props.updateCalendar(activeButton.date, activeButton.color);
  }

  render() {
    return (
      <Nav
        className="w-100 h-100 p-3 flex-column justify-content-between"
        style={{ backgroundColor: "#111032" }}
      >
        {this.navButtons()}
        <NavAddButton clickHandler={this.createNewCategory} />
      </Nav>
    );
  }
}
