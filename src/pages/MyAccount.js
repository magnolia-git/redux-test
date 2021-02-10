import React from 'react';
import '../index.css';
import { ListGroupItem, ListGroup, Button, Table } from 'reactstrap';
import { PersonCircle, Gear } from 'react-bootstrap-icons';
import {useDispatch} from 'react-redux';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

function RenderChecking() {
  return (
    <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  );
}

const CheckingAccount = () => {

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
          <Button block color="warning">Delete Transaction</Button>
        </div>
      </div>
      <div className="row" >
        <div className="col">
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
const BusinessAccounts = () => {

  return (
    <>my acccount</>
  )
}
const SavingsAccount = () => {

  return (
    <>my acccount</>
  )
}

const CDAccounts = () => {

  return (
    <>my acccount</>
  )
}

const IRAAccount = () => {

  return (
    <>my acccount</>
  )
}

const RothIRA = () => {

  return (
    <>my acccount</>
  )
}

const RolloverIRA = () => {

  return (
    <>my acccount</>
  )
}




const MyAccount = () =>  {

  let { path, url } = useRouteMatch();

  const dispatch = useDispatch();

  return (
    <div className="container">
      <hr />
      <div id="maxheight" className="row">
      <div className="col-4">
      <ListGroup>
        <ListGroupItem disabled style={{backgroundColor: '#50AEEC', color: 'black'}}><PersonCircle /> My Accounts</ListGroupItem>
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

        <ListGroupItem disabled style={{backgroundColor: '#50AEEC', color: 'black'}}><PersonCircle /> My Investments</ListGroupItem>

        <Link to={`/account/cd-accounts`}>
          <ListGroupItem tag="button" action>
            CD Accounts
            </ListGroupItem>
        </Link>

        <Link to={`/account/ira`}>
          <ListGroupItem tag="button" action>
            IRA Account
            </ListGroupItem>
        </Link>

        <Link to={`/account/roth-ira`}>
          <ListGroupItem tag="button" action>
            Roth IRA
            </ListGroupItem>

            <Link to={`/account/rollover-ira`}>
          <ListGroupItem tag="button" action>
            Rollover IRA
            </ListGroupItem>
        </Link>
        </Link>
        {/* <ListGroupItem tag="button" action>Account</ListGroupItem> */}
        <ListGroupItem tag="button" action>CD Rates</ListGroupItem>
        <ListGroupItem disabled style={{backgroundColor: '#50AEEC', color: 'black'}}><Gear /> Settings</ListGroupItem>
        <ListGroupItem tag="button" action>Profile</ListGroupItem>
        <ListGroupItem tag="button" action>Account Data</ListGroupItem>
      </ListGroup>
      </div>
      <div className="col-8">
      <Switch>
        {/* <Route exact path={path}>
          < />
        </Route> */}
        <Route path={`${path}/checking-accounts`}>
          < CheckingAccount />
        </Route>
        <Route path={`${path}/dba-accounts`}>
          < BusinessAccounts />
        </Route>
        <Route path={`${path}/savings-accounts`}>
          < SavingsAccount />
        </Route>
        <Route path={`${path}/cd-accounts`}>
          < CDAccounts />
        </Route>
        <Route path={`${path}/ira-accounts`}>
          < IRAAccount />
        </Route>
        <Route path={`${path}/roth-ira`}>
          < RothIRA />
        </Route>
        <Route path={`${path}/rollover-ira`}>
          < RolloverIRA />
        </Route>


      </Switch>
      </div>
      </div>
    </div>
  );
}

export default MyAccount;
