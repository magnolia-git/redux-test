import * as ActionTypes from './ActionTypes';

export const SavingsAccs = (state = {
  isLoading: true,
  errMess: null,
  savingsAccs: []
},action) => {
  switch(action.type) {

    case ActionTypes.ADD_SAVINGS:
      return {...state, isLoading: false, errMess: null, savingsAccs: action.payload};

    case ActionTypes.SAVINGS_LOADING:
      return {...state, isLoading: true, errMess: null, savingsAccs: []};

    case ActionTypes.SAVINGS_FAILED:
      return {...state, isLoading: false, errMess: action.payload, savingsAccs: []};

    default:
      return state;
  }
}
