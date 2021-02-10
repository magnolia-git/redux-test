import * as ActionTypes from './ActionTypes';

export const CDAccs = (state = {
  isLoading: true,
  errMess: null,
  cdAccs: []
},action) => {
  switch(action.type) {

    case ActionTypes.ADD_CD:
      return {...state, isLoading: false, errMess: null, cdAccs: action.payload};

    case ActionTypes.CD_LOADING:
      return {...state, isLoading: true, errMess: null, cdAccs: []};

    case ActionTypes.CD_FAILED:
      return {...state, isLoading: false, errMess: action.payload, cdAccs: []};

    default:
      return state;
  }
}
