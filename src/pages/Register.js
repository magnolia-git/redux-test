import React from 'react';
import '../index.css';


function RegistrationForm(props) {
  return(
    <div>
      <h2 id="title">One step closer to a Merit America</h2>
      <hr />
      <div className="container">
        <div className="row">
          <div id="inputBox" className="col-lg-4 offset-lg-4 col-md-8 offset-md-2 col-8 offset-2">
              <form>
                  <div className="form-group text-left">
                  <input type="email"
                         className="form-control"
                         id="email"
                         aria-describedby="emailHelp"
                         placeholder="Email Address"
                  />
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div className="form-group text-left">
                      <input type="password"
                          className="form-control"
                          id="password"
                          placeholder="Password"
                      />
                  </div>
                  <div className="form-group text-left">
                      <input type="password"
                          className="form-control"
                          id="confirmPassword"
                          placeholder="Confirm Password"
                      />
                  </div>
                  <button
                      type="submit"
                      className="btn btn-primary"
                  >
                      Register
                  </button>
              </form>
          </div>
        </div>
      </div>
    </div>
    )
}
export default RegistrationForm;
