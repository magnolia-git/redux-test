import React from 'react';
import LoginComponent from '../components/LoginComponent';
import '../index.css';

function Home() {
  return (
    <div id="bg" className="container">

      <h2 id="title">We love our customers and their money</h2>
      <hr />
      <div style={{padding: '5px'}} className="row align-items-center">
        <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-8 offset-2">
          <LoginComponent />
        </div>
      </div>
    </div>
  );
}

export default Home;
