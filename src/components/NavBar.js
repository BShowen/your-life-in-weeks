import React, { Component } from "react";
import { Container, Nav } from "react-bootstrap";
import NavButton from "./NavButton";
import NavAddButton from "./NavAddButton";

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navButtons: [
        { title: "Text 1", color: "red" },
        { title: "Text 2", color: "green" },
      ],
    };

    this.createNewCategory = this.createNewCategory.bind(this);
  }

  navButtons() {
    const navButtons = this.state.navButtons.map((button, i) => {
      return <NavButton key={i} {...button} />;
    });
    return <Container fluid>{navButtons}</Container>;
  }

  createNewCategory() {
    console.log("NavAddButton clicked");
  }

  render() {
    return (
      <Nav className="flex-column w-100">
        {this.navButtons()}
        <NavAddButton clickHandler={this.createNewCategory} />
      </Nav>
    );
  }
}
