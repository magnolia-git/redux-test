import React, { Component } from 'react';

class LoginComponent extends Component {
  render() {
    return (
      <div style={{border: '2px solid', float: 'right', width: '300px', height: '200px', textAlign: 'center' }}>
        <p>Welcome Back</p>
        <p>username</p>
        <p>password</p>
        <p>login button</p>
        <p>Not a member? Register here!</p>
      </div>
    );
  }
}

export default LoginComponent;
