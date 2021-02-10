import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { team } from './team';
import { reducer as userStatus } from './users/reducer';
import { InitialSupport, InitialUser } from './forms';


export const ConfigureStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  const store = createStore(
    combineReducers({
      team,
      userStatus,
      ...createForms({
        support: InitialSupport,
        user: InitialUser
      })
    }), composeEnhancers(
    applyMiddleware(thunk, logger)
  ));
  return store;
}
