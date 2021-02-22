import React from 'react';
import axios from 'axios';
import { Media, Row, Table, Button } from 'reactstrap';
import { format } from 'date-fns';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import TransactionComponent from './TransactionComponent';
import TransactionHistoryComponent from './TransactionHistoryComponent';
import { addUser } from '../redux/ActionCreators';
import { baseUrlAWS } from '../shared/baseUrl';

const mapDispatchToProps = (dispatch) => ({
  addUser: () => dispatch(addUser())
});

function RenderAccountInfo({account, transactionAcctType, jwt, props}){

  const deleteAccount = async (event) => {
    event.preventDefault();
    await axios.delete(baseUrlAWS + 'api/Me/Delete/' + account.id,
                 { headers: {"Authorization" : `Bearer ${jwt}`}});
    axios.get(baseUrlAWS + 'api/Me/', { headers: {"Authorization" : `Bearer ${jwt}`}})
        .then((response) => {
           console.log(response);
            props.dispatch(addUser(response.data));
        });
  }

  let date = new Date(account.openedOn);
  let formattedDate = format(date, "MMMM do, yyyy h:mma");
  return (
    <div>
      <div className="row">
        <div className="col-6">
          <Media body className="ml-2">
            <Media heading>Account #{account.id}</Media>
            <p>Balance: ${account.balance.toLocaleString()}</p>
            <p>Opened on: {formattedDate}</p>
          </Media>
        </div>
        <div className="col-6">
          <Button block onClick={deleteAccount} color="danger">Delete Account</Button>
          <p />
          <TransactionComponent transactionAcctType={transactionAcctType} account={account} jwt={jwt} />
        </div>
      </div>
      <div className="row">
        <TransactionHistoryComponent account={account} transactionAcctType={transactionAcctType} />
      </div>
    <hr />
    </div>
  );
}

function Accounts(props) {

  const deleteAccounts = async (event) => {
    event.preventDefault();
    await axios.delete(baseUrlAWS + 'api/Me/Delete/' + props.accounts.id,
                 { headers: {"Authorization" : `Bearer ${props.jwt}`}});
    axios.get(baseUrlAWS + 'api/Me/', { headers: {"Authorization" : `Bearer ${props.jwt}`}})
        .then((response) => {
           console.log(response);
            props.dispatch(addUser(response.data));
        });
  }

  if(props.accounts !== null) {
    if(Array.isArray(props.accounts)){
      let sum = 0;
      props.accounts.map((account) => {
        sum += parseInt(account.balance);
      });
      const summary = props.accounts.map((account) => {

      return (
          <RenderAccountInfo key={account.id} accounts={props.accounts} account={account} transactionAcctType={props.transactionAcctType} jwt={props.jwt} props={props} />
      );
    });



    return (
      <div>
        <div>
          <h2 id="title">{props.accountType}</h2>
          <hr />
          <h2>Total Balance: ${sum.toLocaleString()}</h2>
          <hr />
        </div>
        <Media list>
            {summary}
        </Media>
      </div>
    );
  } else {
    let date = new Date(props.accounts.openedOn);
    let formattedDate = format(date, "MMMM do, yyyy H:mma");
      return(
        <div>
          <div>
            <h2 id="title">{props.accountType}</h2>
            <hr />
            <h2>Total Balance: ${props.accounts.balance}</h2>
            <hr />
          </div>
          <Media>
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <Media body className="ml-2">
                    <Media heading>Account #{props.accounts.id}</Media>
                    <p>Balance: ${props.accounts.balance.toLocaleString()}</p>
                    <p>Opened on: {formattedDate}</p>
                  </Media>
                </div>
                <div className="col-6">
                  <Button block onClick={deleteAccounts} color="danger">Delete Account</Button>
                  <p />
                  <TransactionComponent transactionAcctType={props.transactionAcctType} account={props.accounts} jwt={props.jwt} />
                </div>
              </div>
              <div className="row">
                <TransactionHistoryComponent account={props.accounts} transactionAcctType={props.transactionAcctType} />
              </div>
            </div>
          </Media>
        </div>
      );
    }
  } else {
    return(
      <div>
        <h1>No account data.</h1>
        <p>Please create an account of this type first.</p>
      </div>
    )
  }
}

export default withRouter(connect(mapDispatchToProps)(Accounts));
