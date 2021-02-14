import React from 'react';
import { Media, Row, Table, Button } from 'reactstrap';
import { format } from 'date-fns';


function RenderAccountInfo({account}){
  let date = new Date(account.openedOn);
  let formattedDate = format(date, "MMMM do, yyyy h:mma");
  return (
    <div>
      <div className="row">
        <div className="col-6">
          <Media>
            <Media body className="ml-2">
              <Media heading>Account #{account.id}</Media>
              <p>Balance: ${account.balance.toLocaleString()}</p>
              <p>Opened on: {formattedDate}</p>
            </Media>
          </Media>
        </div>
        <div className="col-6">
          <Button block color="danger">Delete Account</Button>
          <p />
          <Button className="col-12 col-md-6" color="primary">Create Transaction</Button>
          <Button className="col-12 col-md-6" color="warning">Delete Transaction</Button>
        </div>
      </div>
      <div className="row">
      <p />
      </div>
          <Table striped dark>
      <thead>
        <tr>
          <th>Transaction</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mac Dondald's</td>
          <td>-$652.00</td>
          <td>10/10/2019</td>
        </tr>
        <tr>
          <td>What a Burger</td>
          <td>-$889.99</td>
          <td>12/10/2020</td>
        </tr>
      </tbody>
    </Table>
    <hr />
    </div>
  );
}

function Accounts(props) {
  if(props.accounts !== null) {
    if(Array.isArray(props.accounts)){
      let sum = 0;
      props.accounts.map((account) => {
        sum += parseInt(account.balance);
      });
      const summary = props.accounts.map((account) => {
      return (

          <RenderAccountInfo key={account.id} account={account} accountType={props.accountType} />

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
          </div>
          <div className="row">
            <div className="col-6">
              <Media>
                <Media body className="ml-2">
                  <Media heading>Account #{props.accounts.id}</Media>
                  <p>Balance: ${props.accounts.balance.toLocaleString()}</p>
                  <p>Opened on: {formattedDate}</p>
                </Media>
              </Media>
            </div>
            <div className="col-6">
              <Button block color="danger">Delete Account</Button>
              <p />
              <Button className="col-12 col-md-6" color="primary">Create Transaction</Button>
              <Button className="col-12 col-md-6" color="warning">Delete Transaction</Button>
            </div>
          </div>
        </div>
      );
    }
  } else {
    return(
      <div>
        <h1>No account</h1>
      </div>
    )
  }
}

export default Accounts;
