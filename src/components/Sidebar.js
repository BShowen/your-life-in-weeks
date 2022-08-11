import React, { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import NavButton from "./NavButton";
import NavAddButton from "./NavAddButton";
import NavBrand from "./NavBrand";
import { DateTime } from "luxon";

export default class Sidebar extends Component {
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
        {
          title: "Graduated high school",
          color: "#08DAFF",
          id: 3,
          date: DateTime.fromJSDate(new Date("06/10/2010")),
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
    return navButtons;
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
      <Navbar
        expand="lg"
        className="flex-column"
        style={{ backgroundColor: "#111032", minWidth: "320px" }}
      >
        <Container id="nav-container">
          <NavBrand />
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="text-light w-100"
            style={{ textAlign: "right" }}
          >
            X
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav" className="pt-2 w-100">
            <Nav className="flex-column w-100">{this.navButtons()}</Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
