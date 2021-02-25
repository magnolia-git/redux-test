import React, { useState } from 'react';
import axios from 'axios';
import { baseUrlAWS } from '../shared/baseUrl';
import '../index.css';
import { ListGroupItem, ListGroup, Button, Table, Modal, ModalHeader, ModalBody, ModalFooter, Form, Label, Input } from 'reactstrap';
import { PersonCircle, Gear, ArrowClockwise } from 'react-bootstrap-icons';
import {useDispatch, connect} from 'react-redux';
import Accounts from '../components/AccountComponent';
import { addUser } from '../redux/ActionCreators';
import AccountModal from '../components/AccountModal';
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from "react-router-dom";

function MyAccount(props) {

  const user = props.user;
  const jwt = props.jwt.jwt;

  // Reloads the user. Test in case it doesn't auto-reload account stuff.
  const reloadUser = async (event) => {
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
          <ListGroupItem tag="button" action>CD Rates</ListGroupItem>
          <ListGroupItem disabled style={{backgroundColor: '#50AEEC', color: 'black'}}><Gear /> Settings</ListGroupItem>
          <ListGroupItem tag="button" action>Profile</ListGroupItem>
          <ListGroupItem tag="button" action>Account Data</ListGroupItem>
        </ListGroup>

      <div className="col-8">
        <Switch>
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

export default connect(mapDispatchToProps)(MyAccount);
