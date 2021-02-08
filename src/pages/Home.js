import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Control, Form, Errors, actions } from 'react-redux-form';
import { Button, Col, Row, NavLink } from 'reactstrap';
import { postUser } from '../redux/users/actions';
import {Redirect }from 'react-router-dom';

import '../index.css';

const required = (val) => val && val.length;

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.postUser(values);
  }

  render () {

  const{ isLoggedIn } = this.props;

  if (isLoggedIn){
    return(<Redirect to="/account" />)
  }


  return (
    <div id="bg" className="container">
      <h2 id="title">We love our customers and their money</h2>
      <hr />
      <div style={{padding: '5px'}} className="row align-items-center">
        <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-8 offset-2" id="inputBox">
        <h4>Welcome Back!</h4>

        <Form model="user" onSubmit={(values) => this.handleSubmit(values)}>
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
                model=".firstname"
                show="touched"
                messages={{
                  required: 'Required. '
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
                model=".message"
                show="touched"
                messages={{
                  required: 'Required. '
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
        <div className="col-8 offset-2">
        <p />
          <NavLink style={{backgroundColor: 'white', borderRadius: '15px', fontSize: '14px'}} href="/register">No account? Register!</NavLink>
        </div>
        </div>
      </div>
    </div>
  );
}}

const mapStateToProps = (state)=> ({
    isLoggedIn: state.userStatus.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  postUser: (values) => { dispatch(postUser(values)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
