import * as ActionTypes from './ActionTypes';

export const CheckingAccs = (state = {
  isLoading: true,
  errMess: null,
  checkingAccs: []
},action) => {
  switch(action.type) {

    case ActionTypes.ADD_CHECKING:
      return {...state, isLoading: false, errMess: null, checkingAccs: action.payload};

    case ActionTypes.CHECKING_LOADING:
      return {...state, isLoading: true, errMess: null, checkingAccs: []};

    case ActionTypes.CHECKING_FAILED:
      return {...state, isLoading: false, errMess: action.payload, checkingAccs: []};

    default:
      return state;
  }
}
