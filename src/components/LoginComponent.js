import React, { Component } from 'react';
import { Button } from 'reactstrap';

class LoginComponent extends Component {
  render() {
    return (
      <div style={{padding: '5px', border: '2px solid', textAlign: 'center' }}>
        <h4>Welcome Back</h4>
        <p>username</p>
        <p>password</p>
        <div>
        <Button color="success">Login</Button>
        </div>
        <div>
        <Button size="sm" color="primary">Not a member? Register here!</Button>
        </div>
      </div>
    );
  }
}

export default LoginComponent;
