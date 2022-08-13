import React, { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import NavButton from "./NavButton";
import NavBrand from "./NavBrand";
import { DateTime } from "luxon";
import ModalForm from "./ModalForm";
import NewCategoryForm from "./NewCategoryForm";
import AddButton from "./AddButton";
import MiniNav from "./MiniNav";
import { hideAll } from "tippy.js";

export default class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navButtons: [],
      activeButton: {},
      modalShowing: false,
      rotateMenuHamburger: false,
    };

    this.createNewCategory = this.createNewCategory.bind(this);
    this.setActiveNavButton = this.setActiveNavButton.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.rotateHamburger = this.rotateHamburger.bind(this);
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
      date: DateTime.fromObject(category.date),
      id,
    };
    this.setState({
      navButtons: this.state.navButtons.concat(newCategory),
      modalShowing: false,
    });
  }

  toggleModal() {
    hideAll({ duration: 250 });
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

  rotateHamburger() {
    this.setState({
      rotateMenuHamburger: !this.state.rotateMenuHamburger,
    });
  }

  render() {
    const navButtons = this.navButtons();
    const createNewCategoryButton = (
      <AddButton clickHandler={this.toggleModal} />
    );
    return (
      <>
        <ModalForm
          isShowing={this.state.modalShowing}
          toggle={this.toggleModal}
          title="Add a new category"
          onHide={this.toggleModal}
          form={<NewCategoryForm handleSubmit={this.createNewCategory} />}
        />
        <Navbar
          className="d-none d-lg-flex flex-column pt-3 pb-3"
          style={{ backgroundColor: "#111032", minWidth: "320px" }}
        >
          <Container id="nav-container">
            <NavBrand />
            <Nav className="flex-column pt-2 w-100">
              {navButtons}
              <hr />
              {createNewCategoryButton}
            </Nav>
          </Container>
        </Navbar>
        <MiniNav
          navButtons={navButtons}
          createNewCategoryButton={createNewCategoryButton}
        />
      </>
    );
  }
}
