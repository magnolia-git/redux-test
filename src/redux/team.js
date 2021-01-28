import * as Actions from './Actions';

export const Team = (state = {
  isLoading: true,
  errMess: null,
  team: []
}, action) => {
  switch(action.type) {

    case Actions.ADD_TEAM:
      return {...state, isLoading: false, errMess: null, team: action.payload};

    case Actions.TEAM_LOADING:
      return {...state, isLoading: true, errMess: null, team: []};

    case Actions.TEAM_FAILED:
      return {...state, isLoading: false, errMess: action.payload, team: []};

    default:
      return state;
  }
}
