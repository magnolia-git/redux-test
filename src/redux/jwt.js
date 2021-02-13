import * as Actions from './Actions';

export const Jwt = (state = {
  jwt: ''
}, action) => {
    switch (action.type) {
        case Actions.ADD_JWT:
            return {...state, jwt: action.payload};
        case Actions.DELETE_JWT:
          return {...state, jwt: ''};
        default:
            return state;
    }
}
