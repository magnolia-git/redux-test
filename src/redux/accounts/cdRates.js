import * as ActionTypes from './ActionTypes';

export const CDRates = (state = {
  isLoading: true,
  errMess: null,
  cdRates: []
},action) => {
  switch(action.type) {

    case ActionTypes.ADD_CDRATES:
      return {...state, isLoading: false, errMess: null, cdRates: action.payload};

    case ActionTypes.CDRATES_LOADING:
      return {...state, isLoading: true, errMess: null, cdRates: []};

    case ActionTypes.CDRATES_FAILED:
      return {...state, isLoading: false, errMess: action.payload, cdRates: []};

    default:
      return state;
  }
}
