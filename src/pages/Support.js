import React, { Component } from 'react';
import '../index.css';
import { Control, Form, Errors, actions } from 'react-redux-form';
import { Button, Label, Col, Row } from 'reactstrap';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Support extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.postSupport(values.firstname, values.lastname, values.email, values.message);
    console.log("Current State is: " + JSON.stringify(values));
    alert("Your support message has been logged!\n" + JSON.stringify(values));
    this.props.resetSupportForm();
  }

  render() {


  return (
    <div className="container">
      <h1 id="title">This is a Very Supportive Title!!!</h1>
      <hr />
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7384.861434863314!2d-77.03419502573749!3d38.90221858699054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7956c148399%3A0xebb35be2aa84c066!2sWashington%2C%20DC%2020005!5e0!3m2!1sen!2sus!4v1611778124092!5m2!1sen!2sus" width="400px" height="400px" frameborder="0" style={{margin: '5px', border:'0', float: 'right'}} allowfullscreen="" aria-hidden="true" tabindex="0"></iframe>
      <Form model="support" onSubmit={(values) => this.handleSubmit(values)}>
        <Row className="form-group">
          <Col md={6}>
            <Control.text
              model=".firstname"
              id="firstname"
              name="firstname"
              placeholder="First Name*"
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
          <Col md={6}>
            <Control.text
              model=".lastname"
              id="lastname"
              name="lastname"
              placeholder="Last Name*"
              className="form-control"
              validators={{required, minLength: minLength(3), maxLength: maxLength(15)}}
            />
            <Errors
              className="text-danger"
              model=".lastname"
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
          <Col md={12}>
            <Control.text
              model=".email"
              id="email"
              name="email"
              placeholder="Email Address*"
              className="form-control"
              validators={{required, minLength: minLength(3), maxLength: maxLength(15), validEmail}}
            />
            <Errors
              className="text-danger"
              model=".email"
              show="touched"
              messages={{
                required: 'Required. ',
                validEmail: 'Invalid Email Address. '
              }}
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Col md={12}>
            <Control.textarea
              model=".message"
              id="message"
              className="form-control"
              name="message"
              placeholder="Enter message here*"
              rows="6"
              validators={{required, minLength: minLength(3), maxLength: maxLength(255)}}
            />
            <Errors
              className="text-danger"
              model=".message"
              show="touched"
              messages={{
                required: 'Required. ',
                minLength: 'Must be greater than 2 characters. ',
                maxLength: 'Must be shorter than 256 characters. '
              }}
            />
          </Col>
        </Row>

        <Row className="form-group">
          <Col md={12}>
            <Button type="submit" color="primary">Send Support</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}}

export default Support;
