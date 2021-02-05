//after successfful Login this is the account page?
import React, { Component } from 'react';


var isLoggedIn = false;

const currentTime = new Date(2020, 4, 2, 9).getHours();
console.log(currentTime);


function Account() {
  return (
      <div className="container">
        {/*Ternary Operator*/}
        {isLoggedIn ? <h1>Hello</h1> : <Login />}
        {/*AND Operator*/}
        {currentTime > 12 && <h1>Welcome to Merit Banking Services</h1>}
      </div>
      <Footer />
    </div>
  );
}

export default Account;
