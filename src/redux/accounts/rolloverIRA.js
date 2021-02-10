import * as ActionTypes from './ActionTypes';

export const RolloverIRA = (state = {
  isLoading: true,
  errMess: null,
  rolloverIRA: []
},action) => {
  switch(action.type) {

    case ActionTypes.ADD_ROLLOVER:
      return {...state, isLoading: false, errMess: null, rolloverIRA: action.payload};

    case ActionTypes.ROLLOVER_LOADING:
      return {...state, isLoading: true, errMess: null, rolloverIRA: []};

    case ActionTypes.ROLLOVER_FAILED:
      return {...state, isLoading: false, errMess: action.payload, rolloverIRA: []};

    default:
      return state;
  }
}
