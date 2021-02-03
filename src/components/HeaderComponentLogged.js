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

class HeaderLogged extends Component {

  render() {
    return (
      <div className="container">
        <div style={{textAlign: 'center'}} className="row">
          <Navbar>
            <div className="col-md-4 col-sm-12 col-12">

              <img src="path857.png"></img>

            </div>

            <div className="col-md-1 col-2">
                <NavLink href="/">Home</NavLink>
            </div>
            <div className="col-md-1 col-2">
                <NavLink href="/about">About</NavLink>
            </div>
            <div className="col-md-1 col-2">
                <NavLink href="/team">Team</NavLink>
            </div>

            <div className="col-md-1 col-2">
                <NavLink href="/support">Support</NavLink>
            </div>

            <div className="col-md-1 col-2">
                <NavLink href="/account">Account</NavLink>
            </div>

            <div className="col-md-1 col-2">
                <NavLink href="/">Logout</NavLink>
            </div>

          </Navbar>
        </div>
      </div>
    );
  }
}
export default HeaderLogged;
