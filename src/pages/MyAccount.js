import React from 'react';
import '../index.css';
import { ListGroupItem, ListGroup } from 'reactstrap';
import { PersonCircle, Gear } from 'react-bootstrap-icons';

function MyAccount() {
  return (
    <div id="bg" className="container">
      <hr />
      <div id="maxheight" className="row">
      <div className="col-4">
      <ListGroup>
        <ListGroupItem disabled style={{backgroundColor: '#50AEEC', color: 'black'}}><PersonCircle /> Dashboard</ListGroupItem>
        <ListGroupItem active tag="button" action>Accounts</ListGroupItem>
        <ListGroupItem tag="button" action>Investments</ListGroupItem>
        <ListGroupItem tag="button" action>CD Rates</ListGroupItem>
        <ListGroupItem disabled style={{backgroundColor: '#50AEEC', color: 'black'}}><Gear /> Settings</ListGroupItem>
        <ListGroupItem tag="button" action>Profile</ListGroupItem>
        <ListGroupItem tag="button" action>Account Data</ListGroupItem>
      </ListGroup>
      </div>
      <div className="col-8">
        <p>What in the empty...? This is where the window will be that the buttons will update. I suppose I could call them components.
          Just pretend a window is here for now. Will I need to use Routes here, or include them with the others in App.js?</p>
      </div>
      </div>
    </div>
  );
}

export default MyAccount;
