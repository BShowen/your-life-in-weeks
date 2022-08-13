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
    };

    this.createNewCategory = this.createNewCategory.bind(this);
    this.toggleActiveButton = this.toggleActiveButton.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.deleteCategory = this.deleteCategory.bind(this);
  }

  navButtons() {
    const navButtons = this.state.navButtons.map((button, i) => {
      return (
        <NavButton
          key={i}
          {...button}
          active={this.state.activeButton.id === button.id}
          toggleActive={this.toggleActiveButton.bind(this, button.id)}
          delete={this.deleteCategory}
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

  deleteCategory(e, id) {
    e.stopPropagation();
    if (this.state.activeButton.id === id) {
      this.setState(
        {
          navButtons: this.state.navButtons.filter((event) => event.id !== id),
          activeButton: {},
        },
        () => {
          this.props.updateCalendar(DateTime.now(), "#193688");
        }
      );
    } else {
      this.setState({
        navButtons: this.state.navButtons.filter((event) => event.id !== id),
      });
    }
  }

  toggleModal() {
    hideAll({ duration: 250 });
    this.setState({
      modalShowing: !this.state.modalShowing,
    });
  }

  toggleActiveButton(id) {
    if (this.state.activeButton.id === id) {
      this.setState({
        activeButton: {},
      });
      this.props.updateCalendar(DateTime.now(), "#193688");
      return;
    }

    const activeButton = this.state.navButtons.find(
      (button) => button.id === id
    );

    this.setState({
      activeButton: activeButton,
    });

    this.props.updateCalendar(activeButton.date, activeButton.color);
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
