import React, { Component } from 'react';
import '../index.css';
import { Control, Form, Errors, actions } from 'react-redux-form';
import { Button, Label, Col, Row } from 'reactstrap';
import { createUser } from '../redux/users/actions';
import { connect } from 'react-redux';
import {Redirect }from 'react-router-dom';

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
    this.props.createUser(values);
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
              model=".firstName"
              id="firstName"
              name="firstName"
              placeholder="First Name*"
              className="form-control"
              validators={{required}}
            />
            <Errors
              className="text-danger"
              model=".firstName"
              show="touched"
              messages={{
                required: 'Required. ',
                minLength: 'Must be greater than 2 characters. ',
              }}
            />
          </Col>
        </Row>
        <Row className="form-group" xs={6}>
          <Col xs={12}>
            <Control.text
              model=".lastName"
              id="lastName"
              name="lastName"
              placeholder="Last Name*"
              className="form-control"
              validators={{required}}
            />
            <Errors
              className="text-danger"
              model=".lastName"
              show="touched"
              messages={{
                required: 'Required. ',
                minLength: 'Must be greater than 2 characters. ',
              }}
            />
          </Col>
        </Row>
        <Row className="form-group" xs={6}>
          <Col xs={12}>
            <Control.text
              type='date'
              model=".birthDate"
              id="birthDate"
              name="birthDate"
              placeholder="Birth Date*"
              className="form-control"
              validators={{required}}
            />
            <Errors
              className="text-danger"
              model=".birthDate"
              show="touched"
              messages={{
                required: 'Required. ',
              }}
            />
          </Col>
        </Row>
        <Row className="form-group" xs={6}>
          <Col xs={12}>
            <Control.text
              type='number'
              model=".ssn"
              id="ssn"
              name="ssn"
              placeholder="SSN*"
              className="form-control"
              validators={{required}}
            />
            <Errors
              className="text-danger"
              model=".ssn"
              show="touched"
              messages={{
                required: 'Required. ',
              }}
            />
          </Col>
        </Row>
        <Row className="form-group" xs={6}>
          <Col xs={12}>
            <Control.text
              model=".userName"
              id="userName"
              name="userName"
              placeholder="Username*"
              className="form-control"
              validators={{required}}
            />
            <Errors
              className="text-danger"
              model=".userName"
              show="touched"
              messages={{
                required: 'Required. ',
                minLength: 'Must be greater than 2 characters. ',
              }}
            />
          </Col>
        </Row>
        <Row className="form-group" xs={6}>
          <Col xs={12}>
            <Control.text
              model=".email"
              id="email"
              name="email"
              placeholder="Email*"
              className="form-control"
              validators={{required}}
            />
            <Errors
              className="text-danger"
              model=".email"
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
              validators={{required}}
            />
            <Errors
              className="text-danger"
              model=".password"
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
            <Button type="submit" block color="primary">Register</Button>
          </Col>
        </Row>
      </Form>
      </div>
    </div>
    )
}
}
const mapDispatchToProps = (dispatch) => ({
  createUser: (values) => {dispatch(createUser(values))},
});

const mapStateToProps = (dispatch) => ({
  createUser: (values) => { dispatch (createUser(values))}
})


export default connect(mapStateToProps, mapDispatchToProps)(Register);
