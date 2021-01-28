import React from 'react';
import LoginComponent from '../components/LoginComponent';
import '../index.css';

function Home() {
  return (
    <div className="container">
      <h1 id="title">This will be the Home page.</h1>
      <hr />
      <LoginComponent />
    </div>
  );
}

export default Home;
