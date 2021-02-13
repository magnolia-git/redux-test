import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addJWT, addUser } from '../redux/ActionCreators';
import { Form, actions } from 'react-redux-form';
import { Button, Col, Row } from 'reactstrap';
import { baseLocal } from '../shared/baseUrl';
import {Redirect, withRouter, Link }from 'react-router-dom';

const required = (val) => val && val.length;

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
      password: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = async (event) =>{
//       event.preventDefault();
       const user = this.state.userName;
       const pass = this.state.password;
       const jwt = await axios.post(baseLocal + 'authenticate', { userName: user, password: pass });
       this.props.dispatch(addJWT(jwt.data.jwtToken));
       axios.get(baseLocal + 'Users/' + user, { headers: {"Authorization" : `Bearer ${jwt.data.jwtToken}`}})
           .then((response) => this.props.dispatch(addUser(response.data)));
    }


    handleInputChange(event) {
       this.setState({
           [event.target.name]: event.target.value
       });
   }

  render () {

    // const{ isLoggedIn } = this.props;
    //
    // if (isLoggedIn){
    //   return(<Redirect to="/account" />)
    // }


    return (
      <div id="bg" className="container">
        <h2 id="title">We love our customers and their money</h2>
        <hr />
        <div style={{padding: '5px'}} className="row align-items-center">
          <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-8 offset-2" id="inputBox">
          <h4>Welcome Back!</h4>

          <Form model="signin" onSubmit={this.handleSubmit}>

          <input type="text" name="userName" value={this.state.userName} onChange={this.handleInputChange}/>

          <input type="password" name= "password" value={this.state.password} onChange={this.handleInputChange}/>

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
    )
  }
}

//export default connect(mapStateToProps, mapDispatchToProps)(Home);
export default withRouter(connect(mapDispatchToProps)(Home));
