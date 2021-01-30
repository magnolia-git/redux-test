import React from 'react';
import LoginComponent from '../components/LoginComponent';
import '../index.css';

function Home() {
  return (
    <div className="container">

      <h1 id="title">This will be the Home page.</h1>
      <hr />
      <div className="row align-items-center">
        <div className="col">
          <h1 style={{textAlign: 'center'}}>We love our customers and their money</h1>
        </div>
        <div className="col">
          <LoginComponent />
        </div>
      </div>
      <div className="row align-items-center quote">
        <div className="col">
          <img style={{borderRadius: '50%'}} src="https://images.westend61.de/0001312878pw/portrait-of-happy-woman-eating-chocolate-spread-at-home-FMKF06075.jpg" />
        </div>
        <div className="col">
          <h1>"The bank follows me everywhere no matter where I go someone please help me" - Sara</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
