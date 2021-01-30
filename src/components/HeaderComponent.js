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
      <div className="container">
        <div className="row">
          <Navbar light>
            <div className="col-md-4 col-sm-12 col-xs-12">
            <NavbarBrand >
              <img src="path857.png"></img>
            </NavbarBrand>
            </div>

            <div className="col-md-2 col-3">
                <NavLink href="/">Home</NavLink>
            </div>
            <div className="col-md-2 col-3">
                <NavLink href="/about">About</NavLink>
            </div>
            <div className="col-md-2 col-3">
                <NavLink href="/team">Team</NavLink>
            </div>

            <div className="col-md-2 col-3">
                <NavLink href="/support">Support</NavLink>
            </div>


          </Navbar>
        </div>
      </div>
    );
  }
}
export default Header;
