import * as Actions from './Actions';
import UserServices from '../services/UserServices';
import TeamServices from '../services/TeamServices';

// Action Creators for the team page... ////////////////////////////////////////

export const fetchTeam = () => (dispatch) => {
  dispatch(teamLoading(true));

  TeamServices.getTeam()
    .then((response) => dispatch(addTeam(response.data)))
    .catch(error => dispatch(teamFailed(error.message)));
}

export const teamFailed = (errmess) => ({
  type: Actions.TEAM_FAILED,
  payload: errmess
});

export const addTeam = (team) => ({
  type: Actions.ADD_TEAM,
  payload: team
});

export const teamLoading = () => ({
  type: Actions.TEAM_LOADING
});

// Action Creators for the user... /////////////////////////////////////////////

export const fetchUser = () => (dispatch) => {
    dispatch(userLoading(true));

    UserServices.getUser()
    .then((response) => dispatch(addUser(response.data)))
    .catch(error => dispatch(userFailed(error.message)))

}

export const userFailed = (errmess) => ({
    type: Actions.USER_FAILED,
    payload: errmess
})

export const addUser = (user) => ({
    type: Actions.ADD_USER,
    payload: user
})

export const userLoading = () => ({
    type: Actions.USER_LOADING
})

// Action Creators for the accounts... /////////////////////////////////////////



// Action Creators for the jwt token... ////////////////////////////////////////

export const addJWT = (jwt) => ({
  type: Actions.ADD_JWT,
  payload: jwt
});

export const deleteJWT = () => ({
  type: Actions.DELETE_JWT
});
