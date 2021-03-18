import React, { Component } from 'react';
import {Navbar, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu, Collapse, NavbarToggler} from 'reactstrap';


class Heading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }


    // navbar color mode
    navbar_color = "light";

    render() {
        return (
            <Navbar color={this.navbar_color} light expand="md">
                <NavbarBrand href={"/"}>My blog</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/new-article">New Article</NavLink>
                        </NavItem>
                    </Nav>
                    <UncontrolledDropdown>
                        <DropdownToggle nav caret>
                            Options
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>
                                Login
                            </DropdownItem>
                            <DropdownItem>
                                Logout
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Collapse>
            </Navbar>
        )
    }
}

export default Heading
