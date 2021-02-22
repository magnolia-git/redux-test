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


class AccountModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      accountType: 'CheckingAccount',
      balance: null,
      modal: false
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = async (event) => {
        event.preventDefault();
        const data = this.state;
        if(this.props.user.dbaCheckings.length == 3 && this.state.accountType == 'DBACheckingAccount'){
            alert("Only 3 Business Checking Accounts allowed. Account not created.");
        } else if(this.props.user.savingsAccounts != null && this.state.accountType == 'SavingsAccounts'){
            alert("Only 1 Savings Account allowed. Account not created.");
        } else if(this.props.user.checkingAccounts != null && this.state.accountType == 'CheckingAccount'){
            alert("Only 1 Personal Checking Account allowed. Account not created.");
        }else if(this.props.user.ira != null && this.state.accountType == 'IRA'){
            alert("Only 1 Regular IRA Account allowed. Account not created.");
        } else if(this.props.user.rolloverIra != null && this.state.accountType == 'RolloverIRA'){
            alert("Only 1 Rollover IRA Account allowed. Account not created.");
        } else if(this.props.user.rothIra != null && this.state.accountType == 'RothIRA'){
            alert("Only 1 Roth IRA Account allowed. Account not created.");
        }else{
            console.log(this.state);
            await axios.post(baseUrlAWS + 'api/Me/' + this.state.accountType, this.state,
                         { headers: {"Authorization" : `Bearer ${this.props.jwt.jwt}`}});
            axios.get(baseUrlAWS + 'api/Me/', { headers: {"Authorization" : `Bearer ${this.props.jwt.jwt}`}})
                .then((response) => {
                    console.log(response);
                    this.props.dispatch(addUser(response.data));
                });
        }
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
      <Button block color="success" onClick={this.toggle}>Add Account</Button>
      <Modal isOpen={this.state.modal} toggle={this.toggle}>
        <ModalHeader>Add Account </ModalHeader>
        <ModalBody>
          <p>Specify the account type, then click "Create."</p>
          <Form onSubmit={this.handleSubmit}>
        <Input type="select" name="accountType" onChange={this.handleInputChange}>
          <option onClick={this.setAccountType} value="CheckingAccount">Personal Checking Account</option>
          <option onClick={this.setAccountType} value="DBACheckingAccount">Business Checking Account</option>
          <option onClick={this.setAccountType} value="SavingsAccounts">Savings Account</option>
          <option onClick={this.setAccountType} value="RolloverIRA">Rollover IRA Account</option>
          <option onClick={this.setAccountType} value="RothIRA">Roth IRA Account</option>
          <option onClick={this.setAccountType} value="IRA">IRA Account</option>
        </Input>
        <Input type="text" name="balance" onChange={this.handleInputChange} />
        <Button color="success" type="submit" onClick={this.toggle}>Create</Button>
          </Form>
        </ModalBody>
        <ModalFooter>

          <Button color="danger" onClick={this.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
}
export default withRouter(connect(mapDispatchToProps)(AccountModal));
