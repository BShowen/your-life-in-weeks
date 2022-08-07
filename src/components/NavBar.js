import React, { Component } from "react";
import { Container, Nav } from "react-bootstrap";
import NavButton from "./NavButton";
import NavAddButton from "./NavAddButton";

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navButtons: [
        { title: "Text 1", color: "#FBAE14", active: false, id: 0 },
        { title: "Text 2", color: "#019BFD", active: false, id: 1 },
        { title: "Text 2", color: "#00F0AC", active: false, id: 2 },
        { title: "Text 2", color: "#E10075", active: false, id: 3 },
      ],
    };

    this.createNewCategory = this.createNewCategory.bind(this);
    this.setActiveNavButton = this.setActiveNavButton.bind(this);
  }

  navButtons() {
    const navButtons = this.state.navButtons.map((button, i) => {
      return (
        <NavButton key={i} {...button} clickHandler={this.setActiveNavButton} />
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
    this.setState({
      navButtons: this.state.navButtons.map((navButton) => {
        if (navButton.id === id) {
          return { ...navButton, active: true };
        } else {
          return { ...navButton, active: false };
        }
      }),
    });
  }

  render() {
    return (
      <Nav
        className="w-100 h-100 p-3 flex-column justify-content-between"
        style={{ backgroundColor: "#000000" }}
      >
        {this.navButtons()}
        <NavAddButton clickHandler={this.createNewCategory} />
      </Nav>
    );
  }
}
