import React, { Component } from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Input } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addUser } from '../redux/ActionCreators';
import { baseUrlAWS } from '../shared/baseUrl';

const mapDispatchToProps = (dispatch) => ({
  addUser: () => dispatch(addUser())
});

class TransactionComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountTo: null,
      amount: '',
      modal: false,
      transactionType: 'Deposit',
      transactionAcctType: this.props.transactionAcctType
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  // Create Transaction.
  handleSubmit = async (event) => {
    event.preventDefault();
    const amount = this.state.amount;
    const transAccType = this.state.transactionAcctType;
    const id = {"id" : this.props.account.id};
    const data = {
      "amount" : amount
    };
    data[transAccType] = id;

    await axios.post(baseUrlAWS + 'api/Me/' + this.props.account.typeOfAccount + '/' + this.state.transactionType, data,
      { headers: {"Authorization" : `Bearer ${this.props.jwt}`}});
    axios.get(baseUrlAWS + 'api/Me/', { headers: {"Authorization" : `Bearer ${this.props.jwt}`}})
      .then((response) => {
        console.log(response);
        this.props.dispatch(addUser(response.data));
      });
    }

    handleInputChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    toggle = () => {
      this.setState({
        modal: !this.state.modal
      });
    }

  render() {
    return (
      <div>
        <Button block onClick={this.toggle}>Deposit/Withdraw</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader>Create Transaction </ModalHeader>
          <ModalBody>
            <p>Specify whether to withdraw or deposit and the amount, then click "Create."</p>
            <Form onSubmit={this.handleSubmit}>
          <Input type="select" name="transactionType" onChange={this.handleInputChange}>
            <option onClick={this.setTransactionType} value="Deposit">Deposit</option>
            <option onClick={this.setTransactionType} value="Withdraw">Withdraw</option>
          </Input>
          <Input type="text" name="amount" onChange={this.handleInputChange} />
          <Button color="success" type="submit" onClick={this.toggle}>Create</Button>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  };
}

export default withRouter(connect(mapDispatchToProps)(TransactionComponent));
