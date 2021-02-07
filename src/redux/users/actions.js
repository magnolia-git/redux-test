import * as Actions from './action-types';

export const addUser = (user) => ({
    type: Actions.ADD_USER,
    payload: user,
});

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

export const postUser = (userName, password) => (dispatch) => {
    const newUser = {
        userName,
        password,
    };

    const URL = "http://localhost:8080/api/authenticate";
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
        .then((response) =>  dispatch(addUser(response)))
        .catch((error) => {
            console.log("Submit user ", error.message);
            alert("User cannot be registered\nError: " + error.message);
        });
};