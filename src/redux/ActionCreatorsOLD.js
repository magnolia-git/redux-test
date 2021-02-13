import * as Actions from "./Actions";
import { baseUrl } from "../shared/baseUrl";

// Submit support Message. It'll be like the Restaurant website we made in the coursera course.

export const addSupport = (support) => ({
  type: Actions.ADD_SUPPORT,
  payload: support,
});

export const postSupport = (firstname, lastname, email, message) => (
  dispatch
) => {
  const newSupport = {
    firstname: firstname,
    lastname: lastname,
    email: email,
    message: message,
  };
  newSupport.date = new Date().toISOString();

  return fetch(baseUrl + "supportlog", {
    method: "POST",
    body: JSON.stringify(newSupport),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((response) => dispatch(addSupport(response)))
    .catch((error) => {
      console.log("Submit support ", error.message);
      alert("Support could not be logged\nError: " + error.message);
    });
};

// Fetch Team members

export const fetchTeam = () => (dispatch) => {
  dispatch(teamLoading(true));

  return fetch(baseUrl + "team")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((team) => dispatch(addTeam(team)))
    .catch((error) => dispatch(teamFailed(error.message)));
};

export const teamLoading = () => ({
  type: Actions.TEAM_LOADING,
});

export const teamFailed = (errmess) => ({
  type: Actions.TEAM_FAILED,
  payload: errmess,
});

export const addTeam = (team) => ({
  type: Actions.ADD_TEAM,
  payload: team,
});

