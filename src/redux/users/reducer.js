import * as Actions from './action-types';

const initialState = {
    jwt: undefined,
    isLoggedIn: false
}

export function reducer(state = initialState, action) {

  switch(action.type) {

    case Actions.ADD_TOKEN:
      return {...state, isLoggedIn: true, token: localStorage.jwt };

    default:
      return state;
  }
}
