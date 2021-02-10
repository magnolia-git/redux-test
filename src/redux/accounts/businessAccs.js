import * as ActionTypes from './ActionTypes';

export const BusinessAccs = (state = {
  isLoading: true,
  errMess: null,
  businessAccs: []
},action) => {
  switch(action.type) {

    case ActionTypes.ADD_BUSINESS:
      return {...state, isLoading: false, errMess: null, businessAccs: action.payload};

    case ActionTypes.BUSINESS_LOADING:
      return {...state, isLoading: true, errMess: null, businessAccs: []};

    case ActionTypes.BUSINESS_FAILED:
      return {...state, isLoading: false, errMess: action.payload, businessAccs: []};

    default:
      return state;
  }
}
