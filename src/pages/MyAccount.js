import React, { useState } from 'react';
import axios from 'axios';
import { baseUrlAWS } from '../shared/baseUrl';
import '../index.css';
import { ListGroupItem, ListGroup, Button, Table, Modal, ModalHeader, ModalBody, ModalFooter, Form, Label, Input } from 'reactstrap';
//import { Link } from 'react-router-dom';
import { PersonCircle, Gear, ArrowClockwise } from 'react-bootstrap-icons';
import {useDispatch, connect} from 'react-redux';
import Accounts from '../components/AccountComponent';
import { addUser } from '../redux/ActionCreators';
import AccountModal from '../components/AccountModal';


//import { getChecking } from '../redux/accounts/actions';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

export const CheckingAccount = () => {

}
export const BusinessAccounts = () => {

  return (
    <>my acccount</>
  )
}
export const SavingsAccount = () => {

  return (
    <>my acccount</>
  )
}

export const CDAccounts = () => {

  return (
    <>my acccount</>
  )
}

export const IRAAccount = (store) => {

  return (
    <div className="container">
      <h3> </h3>
      <div className="row">
        <div className="col">
          <h2>Current Balance</h2>
          <h1>$100.00</h1>
        </div>
        <div className="col-4">
          <Button block color="danger">Delete Account</Button>
          <Button block color="primary">Create Transaction</Button>
          <Button block color="warning">Delete Transaction</Button>
        </div>
      </div>
      <div className="row" >
        <div className="col">
        <hr />
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
        </div>
      </div>
    </div>
  )
}

export const RothIRA = () => {

  return (
    <>my acccount</>
  )
}

export const RolloverIRA = () => {

  return (
    <>my acccount</>
  )
}




function MyAccount(props) {

  const data = {

  }

  const user = props.user;
  const jwt = props.jwt.jwt;

  const reloadUser = async (event) => {
//    alert(baseUrlAWS + 'api/Me ' + `Bearer ${props.jwt.jwt}`);
    axios.get(baseUrlAWS + 'api/Me', { headers: {"Authorization" : `Bearer ${jwt}`}})
    .then((response) => props.dispatch(addUser(response.data)));

  }

  let { path, url } = useRouteMatch();

  return (
    <div className="container">
      <Button onClick={reloadUser}><ArrowClockwise /> Reload</Button>
      <hr />
      <div id="maxheight" className="row">
      <ListGroup>
      <AccountModal jwt={props.jwt} user={props.user} />
      <p/>
        <ListGroupItem style={{backgroundColor: '#50AEEC', color: 'black', textAlign: 'center'}}>
          <PersonCircle />
          <> My Accounts </>
        </ListGroupItem>
        <Link to={`/account/checking-accounts`}>
          <ListGroupItem tag="button" action>
            Checking Account
          </ListGroupItem>
        </Link>

        <Link to={`/account/dba-accounts`}>
          <ListGroupItem tag="button" action>
            Business Accounts
            </ListGroupItem>
        </Link>

        <Link to={`/account/savings-accounts`}>
          <ListGroupItem tag="button" action>
            Saving Account
          </ListGroupItem>
        </Link>

        <ListGroupItem style={{backgroundColor: '#50AEEC', color: 'black', textAlign: 'center'}}>
          <PersonCircle />
          <> My Investments </>

        </ListGroupItem>

        <Link to={`/account/cd-accounts`}>
          <ListGroupItem tag="button" action>
            CD Accounts
            </ListGroupItem>
        </Link>

        <Link to={`/account/ira-accounts`}>
          <ListGroupItem tag="button" action>
            IRA Account
            </ListGroupItem>
        </Link>

        <Link to={`/account/roth-ira`}>
          <ListGroupItem tag="button" action>
            Roth IRA
          </ListGroupItem>
        </Link>
        <Link to={`/account/rollover-ira`}>
          <ListGroupItem tag="button" action>
            Rollover IRA
          </ListGroupItem>
        </Link>

        {/* <ListGroupItem tag="button" action>Account</ListGroupItem> */}
        <ListGroupItem tag="button" action>CD Rates</ListGroupItem>
        <ListGroupItem disabled style={{backgroundColor: '#50AEEC', color: 'black'}}><Gear /> Settings</ListGroupItem>
        <ListGroupItem tag="button" action>Profile</ListGroupItem>
        <ListGroupItem tag="button" action>Account Data</ListGroupItem>
      </ListGroup>

      <div className="col-8">
      <Switch>
        {/* <Route exact path={path}>
          < />
        </Route> */}
        <Route path={`${path}/checking-accounts`} component={() => <Accounts user={props.user} transactionAcctType="checking" accountType="Personal Checking Account" jwt={jwt} accounts={user.checkingAccounts} />} />

        <Route path={`${path}/dba-accounts`} component={() => <Accounts user={props.user} transactionAcctType="dbaChecking" accountType="Business Accounts" jwt={jwt} accounts={user.dbaCheckings} />} />

        <Route path={`${path}/savings-accounts`} component={() => <Accounts user={props.user} transactionAcctType="savings" accountType="Savings Account" jwt={jwt} accounts={user.savingsAccounts} />} />

        <Route path={`${path}/cd-accounts`} component={() => <Accounts user={props.user} transactionAcctType="cdAccount" accountType="CD Account" jwt={jwt} accounts={user.cDAccounts} />} />

        <Route path={`${path}/ira-accounts`} component={() => <Accounts user={props.user} transactionAcctType="ira" accountType="IRA Account" jwt={jwt} accounts={user.ira} />} />

        <Route path={`${path}/roth-ira`} component={() => <Accounts user={props.user} transactionAcctType="rothIRA" accountType="Roth IRA Account" jwt={jwt} accounts={user.rothIRA} />} />

        <Route path={`${path}/rollover-ira`} component={() => <Accounts user={props.user} transactionAcctType="rolloverIRA" accountType="Rollover IRA Account" jwt={jwt} accounts={user.rollOverIRA} />} />

      </Switch>
      </div>
      </div>
    </div>
  );
}

 const mapDispatchToProps = (dispatch) => ({
   addUser: () => dispatch(addUser())
 });
//
// const mapStateToProps = (dispatch) => ({
//   getChecking: (values) => { dispatch (getChecking(values))},
//   user: dispatch.userStatus.userName,
//   token: dispatch.userStatus.jwt
// });


export default connect(mapDispatchToProps)(MyAccount);
//export default MyAccount;
