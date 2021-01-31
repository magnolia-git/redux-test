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

  render() {
    return (
      <div className="container">
        <div style={{textAlign: 'center'}} className="row">
          <Navbar light>
            <div className="col-md-4 col-sm-12 col-12">

              <img src="path857.png"></img>

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
