import * as ActionTypes from './ActionTypes';

export const RothIRA = (state = {
  isLoading: true,
  errMess: null,
  rothIRA: []
},action) => {
  switch(action.type) {

    case ActionTypes.ADD_ROTHIRA:
      return {...state, isLoading: false, errMess: null, rothIRA: action.payload};

    case ActionTypes.ROTHIRA_LOADING:
      return {...state, isLoading: true, errMess: null, rothIRA: []};

    case ActionTypes.ROTHIRA_FAILED:
      return {...state, isLoading: false, errMess: action.payload, rothIRA: []};

    default:
      return state;
  }
}
