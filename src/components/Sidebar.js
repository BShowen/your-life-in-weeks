import React, { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import NavButton from "./NavButton";
import NavBrand from "./NavBrand";
import { DateTime } from "luxon";
import ModalForm from "./ModalForm";
import NewCategoryForm from "./NewCategoryForm";

export default class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navButtons: [],
      activeButton: {},
      modalShowing: false,
    };

    this.createNewCategory = this.createNewCategory.bind(this);
    this.setActiveNavButton = this.setActiveNavButton.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
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

  createNewCategory(category) {
    const id = this.state.navButtons.length;
    const newCategory = {
      ...category,
      date: DateTime.fromISO(category.date),
      id,
    };
    this.setState({
      navButtons: this.state.navButtons.concat(newCategory),
      modalShowing: false,
    });
  }

  toggleModal() {
    this.setState({
      modalShowing: !this.state.modalShowing,
    });
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
      <>
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
        <ModalForm
          isShowing={this.state.modalShowing}
          toggle={this.toggleModal}
          title="Add a new category"
          form={<NewCategoryForm handleSubmit={this.createNewCategory} />}
        />
      </>
    );
  }
}
