import React, { Component } from 'react';
import '../index.css';
import { Control, Form, Errors, actions } from 'react-redux-form';
import { Button, Label, Col, Row } from 'reactstrap';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Register extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.postUser(values.username, values.email, values.password);
    console.log("Current State is: " + JSON.stringify(values));
    alert("Registering user.\n" + JSON.stringify(values));
    this.props.resetRegisterForm();
  }

  render() {

  return(
    <div className="container col-6">
      <h2 id="title">One Step Closer to a Merit America</h2>
      <hr />
      <div id="inputBox">
      <Form model="user" onSubmit={(values) => this.handleSubmit(values)}>
        <Row className="form-group" xs={6}>
          <Col xs={12}>
            <Control.text
              model=".username"
              id="username"
              name="username"
              placeholder="username*"
              className="form-control"
              validators={{required, minLength: minLength(3), maxLength: maxLength(15)}}
            />
            <Errors
              className="text-danger"
              model=".firstname"
              show="touched"
              messages={{
                required: 'Required. ',
                minLength: 'Must be greater than 2 characters. ',
                maxLength: 'Must be shorter than 16 characters. '
              }}
            />
          </Col>
        </Row>

        <Row className="form-group">
          <Col xs={12}>
            <Control.password
              model=".password"
              id="password"
              className="form-control"
              name="password"
              placeholder="Password*"
              validators={{required, minLength: minLength(3), maxLength: maxLength(16)}}
            />
            <Errors
              className="text-danger"
              model=".message"
              show="touched"
              messages={{
                required: 'Required. ',
                minLength: 'Must be greater than 2 characters. ',
                maxLength: 'Must be shorter than 17 characters. '
              }}
            />
          </Col>
        </Row>

        <Row className="form-group">
          <Col xs={12}>
            <Button type="submit" block color="primary">Login</Button>
          </Col>
        </Row>
      </Form>
      </div>
    </div>
    )
}
}
export default Register;
