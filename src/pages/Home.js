import axios from 'axios';
import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { addJWT, addUser } from '../redux/ActionCreators';
import { Form } from 'react-redux-form';
import { Button, Col, Row, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label } from 'reactstrap';
import { baseUrlAWS } from '../shared/baseUrl';
import {Redirect, withRouter, Link }from 'react-router-dom';

let isLoggedIn = false;

const mapDispatchToProps = (dispatch) => ({
  addUser: () => dispatch(addUser()),
  addJWT: () => dispatch(addJWT())
});

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      err: '',
      userName: '',
      password: '',
      isLoggedIn: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = async (event) =>{
//       event.preventDefault();
       const user = this.state.userName;
       const pass = this.state.password;
       const jwt = await axios.post(baseUrlAWS + 'api/authenticate', { userName: user, password: pass });

       this.props.dispatch(addJWT(jwt.data.jwt));
       axios.get(baseUrlAWS + 'api/Me', { headers: {"Authorization" : `Bearer ${jwt.data.jwt}`}})
           .then((response) => {this.props.dispatch(addUser(response.data));alert("Login Successful!");});
    }


    handleInputChange(event) {
       this.setState({
           [event.target.name]: event.target.value
       });
   }



  render () {

    const { isLoggedIn } = this.props;
    //
    if (isLoggedIn){
       return(<Redirect to="/account" />)
    } else {


    return (
      <div id="bg" className="container">
        <h2 id="title">Modern Banking Solutions for Modern Times</h2>
        <hr />
        <div style={{padding: '5px'}} className="row align-items-center">
          <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-8 offset-2" id="inputBox">
          <h4>Welcome Back!</h4>

          <Form model="signin" onSubmit={this.handleSubmit}>
          <Label>Username</Label>
          <Input type="text" model=".userName" name="userName" value={this.state.userName} onChange={this.handleInputChange}/>
          <Label>Password</Label>
          <Input type="password" model=".password" name= "password" value={this.state.password} onChange={this.handleInputChange}/>
          <p />
            <Row className="form-group">
              <Col xs={12}>
                <Button type="submit" block color="primary">Login</Button>
              </Col>
            </Row>
          </Form>
          <div className="col-8 offset-2">
          <p />
            <Link style={{backgroundColor: 'white', borderRadius: '15px', fontSize: '14px'}} to="/register">No account? Register!</Link>
          </div>
          </div>
        </div>
      </div>
    );
  }
  }
}

//export default connect(mapStateToProps, mapDispatchToProps)(Home);
export default withRouter(connect(mapDispatchToProps)(Home));
