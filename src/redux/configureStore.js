import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { Team } from './team';
//import { reducer as userStatus } from './users/reducer';
import { InitialSupport, InitialUser, NewUser } from './forms';
import { User } from './user';
import { Jwt } from './jwt';


export const ConfigureStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  const store = createStore(
    combineReducers({
      team: Team,
      user: User,
      jwt: Jwt,
      ...createForms({
        support: InitialSupport,
        signin: InitialUser,
        register: NewUser
      })
    }), composeEnhancers(
    applyMiddleware(thunk, logger)
  ));
  return store;
}
