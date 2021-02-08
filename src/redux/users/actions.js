import * as Actions from './action-types';

export const addToken = (token) => ({
    type: Actions.ADD_TOKEN,
    payload: token,
});

// Registering a user
export const createUser = (newUser) => (dispatch) => {
    const URL = "http://localhost:8080/api/authenticate/createUser";
    return fetch(URL, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        }
    },
        (error) => {
            var errmess = new Error(error.message);
            throw errmess;
        }
    )
        .then((response) => response.json())
        .then((response) => {


            console.log({ response });
            alert(JSON.stringify(response));

            return; // dispatch(addUser(response))

        })
        .catch((error) => {
            console.log("Submit user ", error.message);
            alert("User cannot be registered\nError: " + error.message);
        });
};

// Logging in as a user
export const postUser = (returningUser) => (dispatch) => {

    const URL = "http://localhost:8080/api/authenticate";
    return fetch(URL, {
        method: "POST",
        body: JSON.stringify(returningUser),
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        }
    },
        (error) => {
            var errmess = new Error(error.message);
            throw errmess;
        }
    )
        .then((response) => response.json())
        .then((response) =>  dispatch(addToken(response)))
        .then((response) => alert(JSON.stringify(response)))
        .catch((error) => {
            console.log("Submit user ", error.message);
            alert("User cannot sign in\nError: " + error.message);
        });
};
