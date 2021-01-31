import React, { Component } from 'react';
import { Button, NavLink } from 'reactstrap';

class LoginComponent extends Component {
  render() {
    return (
      <div className="container" id="inputBox">
        <div className="row">
          <div className="col-12">
          <h4>Welcome Back!</h4>
          </div>
          <div className="col-12">
            <div className="form-group text-left">
              <input type="username"
                  className="form-control"
                  id="username"
                  placeholder="Username"
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group text-left">
              <input type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
              />
            </div>
          </div>
          <div className="col-12">
          <Button block color="success">Login</Button>
          </div>
          <div className="col-8 offset-2">
          <p />
            <NavLink style={{backgroundColor: 'white', borderRadius: '15px', fontSize: '14px'}} href="/register">No account? Register!</NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginComponent;
