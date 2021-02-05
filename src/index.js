import React from 'react';
import { combineReducers, applyMiddleware } from 'redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';

import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { team } from './redux/team';
import { InitialSupport, InitialNewUser, InitialUser } from './redux/forms';
import { createForms } from 'react-redux-form';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const store = createStore(
  combineReducers({
    team: team,
    login: false,
    store: null,
    ...createForms({
      support: InitialSupport,
      user: InitialUser
    })
  }), composeEnhancers(
  applyMiddleware(thunk, logger)
));


ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
