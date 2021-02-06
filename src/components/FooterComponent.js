import React, { Component } from 'react';
import { Nav } from 'reactstrap';
import { Link } from 'react-router-dom';

class Footer extends Component {


  render() {
    return (
      <div className="col" id="footer">
        <div className="row">
        <Nav style={{padding: '10px'}}>
          <Link to="/">Home</Link> <Link to="/about">About</Link> <Link to="/team">Team</Link> <Link to="/support">Support</Link>

        </Nav>
        </div>
      </div>

    );
  }

}
export default Footer;
