import React from 'react';
import { Media, Row } from 'reactstrap';


function RenderAccountInfo({account}){

  return (
    <div className="col">
      <Media id="smoothBorder">
        <Media body className="ml-2">
          <Media heading>Account ID: {account.id}</Media>
          <p>Balance: ${account.balance}</p>
          <p>Opened on: {account.bankAccountOpened}</p>
        </Media>
      </Media>
    </div>
  );
}

function Accounts(props) {
  if(Array.isArray(props.accounts)){
    let sum = 0;
    props.accounts.map((account) => {
      sum += parseInt(account.balance);
    });
    const summary = props.accounts.map((account) => {
    return (
      <div key={account.id}>
        <RenderAccountInfo account={account} accountType={props.accountType} />
      </div>
    );
  });

  return (
    <div className="container">
      <div>
        <h2 id="title">{props.accountType}</h2>
        <hr />
        <h2>Total Balance: ${sum}</h2>
      </div>
      <Media list>
        <Row lg="2" md="1">
          {summary}
        </Row>
      </Media>
    </div>
  );
} else {
    return(
      <div className="container">
        <div>
          <h2 id="title">{props.accountType}</h2>
          <hr />
        </div>
        <Media>
          <Row lg="2" md="1">
            <div className="col">
              <Media id="smoothBorder">
                <Media body className="ml-2">
                  <Media heading>Account ID: {props.accounts.id}</Media>
                  <p>Balance: ${props.accounts.balance}</p>
                  <p>Opened on: {props.accounts.bankAccountOpened}</p>
                </Media>
              </Media>
            </div>
          </Row>
        </Media>
      </div>
    );
  }
}

export default Accounts;
