import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button
} from 'reactstrap';
import { Link } from 'react-router-dom';
import '../index.css';

class Header extends Component {

// Still needs a way to hide the login and my account link when not signed in

  render() {
    return (
      <div className="col-lg-12">
        <Navbar light>

          <NavbarBrand className="mr-auto" position="absolute">
            <img src="path857.png"></img>
          </NavbarBrand>

          <Nav className="ml-auto" justifyContentCenter>
            <NavItem>
              <Button color="success">Login</Button>
            </NavItem>

            <NavItem>
              <NavLink  href="/">Home</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/team">Team</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/support">Support</NavLink>
            </NavItem>

            <NavItem>
              <NavLink disabled href="#">My Account</NavLink>
            </NavItem>

            <NavItem>
              <NavLink disabled href="#">Logout</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
export default Header;
