import * as ActionTypes from './ActionTypes';

export const IRAAccs = (state = {
  isLoading: true,
  errMess: null,
  iraAccs: []
},action) => {
  switch(action.type) {

    case ActionTypes.ADD_IRA:
      return {...state, isLoading: false, errMess: null, iraAccs: action.payload};

    case ActionTypes.IRA_LOADING:
      return {...state, isLoading: true, errMess: null, iraAccs: []};

    case ActionTypes.IRA_FAILED:
      return {...state, isLoading: false, errMess: action.payload, iraAccs: []};

    default:
      return state;
  }
}
