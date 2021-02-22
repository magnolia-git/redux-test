import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addUser } from '../redux/ActionCreators';
import { baseUrlAWS } from '../shared/baseUrl';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Input, Label } from 'reactstrap';

const mapDispatchToProps = (dispatch) => ({
  addUser: () => dispatch(addUser())
});

class TransferComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      sourceAccountID: this.props.account.id,
      targetAccountID: '',
      modal: false
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      amount: this.state.amount,
      sourceAccountID: this.props.account.id,
      targetAccountID: this.state.targetAccountID
    };
    console.log(data);
    await axios.post(baseUrlAWS + 'api/Me/Transfer/', data, { headers: {"Authorization" : `Bearer ${this.props.jwt}`}});
    axios.get(baseUrlAWS + 'api/Me/', { headers: {"Authorization" : `Bearer ${this.props.jwt}`}})
    .then((response) => {
      console.log(response);
      this.props.dispatch(addUser(response.data));
    });
  }
  handleInputChange = (event) => {
      event.preventDefault();
      this.setState({
          [event.target.name]: event.target.value
      });
  }
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    return (
      <div>
        <Button block color="primary" onClick={this.toggle}>Transfer</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader>Transfer</ModalHeader>
          <ModalBody>
            <p>Specify the accounts to transfer money between.</p>
            <Form onSubmit={this.handleSubmit}>
            <Label>Amount</Label>
          <Input type="number" name="amount" placeholder="$" onChange={this.handleInputChange} />
          <Label>Source account ID</Label>
          <Input value={this.props.account.id} disabled="true" name="sourceAccountID" />
          <Label>Destination account ID</Label>
          <Input type="number" name="targetAccountID" onChange={this.handleInputChange} />
          <hr />
          <Button color="success" type="submit" onClick={this.toggle}>Transfer</Button>
            </Form>
          </ModalBody>
          <ModalFooter>

            <Button color="danger" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}
export default withRouter(connect(mapDispatchToProps)(TransferComponent));
