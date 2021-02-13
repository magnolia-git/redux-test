import { ADD_TEAM, TEAM_LOADING, TEAM_FAILED } from './Actions';

export const Team = (state = {
  isLoading: false,
  errMess: null,
  team: []
}, action) => {

  switch(action.type) {

    case ADD_TEAM:
      return {...state, isLoading: false, errMess: null, team: action.payload};

    case TEAM_LOADING:
      return {...state, isLoading: true, errMess: null, team: []};

    case TEAM_FAILED:
      return {...state, isLoading: false, errMess: action.payload, team: []};

    default:
      return state;

  }
}
