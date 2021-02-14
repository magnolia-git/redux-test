import React, { Component } from 'react';
import { Navbar } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../index.css';

class Header extends Component {

  render() {
    return (
      <div className="container">
        <div style={{textAlign: 'center'}} className="row">
          <Navbar>
            <div className="col-md-4 col-sm-12 col-12">

              <img src="path857.png" alt="Merit America Bank"></img>

            </div>

            <div className="col">
                <Link to="/">Home</Link>
            </div>
            <div className="col">
                <Link to="/about">About</Link>
            </div>
            <div className="col">
                <Link to="/team">Team</Link>
            </div>

            <div className="col">
                <Link to="/support">Support</Link>
            </div>
            <div className="col">
                <Link to="/account">Account</Link>
            </div>


          </Navbar>
        </div>
      </div>
    );
  }
}
export default Header;
