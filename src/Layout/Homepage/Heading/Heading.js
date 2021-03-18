import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  Collapse,
  NavbarToggler,
  Button,
  NavbarText,
} from "reactstrap";
import { connect } from "react-redux";
import firebase from "../../../Config/firebase";
import { Link } from "react-router-dom";

class Heading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  // navbar color mode
  navbar_color = "light";
  a = process.env.PUBLIC_URL + "/#/";

  render() {
    
    return (
      <Navbar color={this.navbar_color} light expand="md">
        <NavbarBrand href={"/my-app/#/"}>My blog</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href={"#/new-article"}>New Article</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
          {(() => {
            
          })()}
          </NavbarText>
          <UncontrolledDropdown>
            <DropdownToggle nav caret>
              Options
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <a href="#/login">Login</a>
              </DropdownItem>
              <DropdownItem>
                <Button onClick={() => firebase.auth().signOut() && window.location.replace("#/login")}>Logout</Button>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Collapse>
      </Navbar>
    );
  }
}

const enhance = connect(({ firebase: { auth, profile } }) => ({
  auth,
  profile,
}));

export default enhance(Heading);
