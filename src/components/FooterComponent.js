import React, { Component, useState } from 'react';
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
  NavbarText
} from 'reactstrap';
import { Link } from 'react-router-dom';

class Footer extends Component {


  render() {
    return (
      <div id="footer">
        <Nav>
          <NavLink href="/">Home</NavLink> <NavLink href="/about">About</NavLink> <NavLink href="/team">Team</NavLink> <NavLink href="/support">Support</NavLink>

        </Nav>
      </div>

    );
  }

}
export default Footer;
