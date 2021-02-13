// import * as Actions from "./ActionTypes";
//
// // Let's try to get back some json first from an account...
// // It might print it out in the alert.
// export const getChecking = () => (dispatch) => {
//
//   const user = dispatch(user.userName);
//   const userStatus = dispatch(userStatus.jwt);
//
//   const URL = `http://192.168.4.11:31337/Users/${user}/Checking Account`;
//   return fetch(
//     URL,
//     {
//       method: "GET",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${userStatus}`
//       },
//     },
//     (error) => {
//       var errmess = new Error(error.message);
//       throw errmess;
//     }
//   )
//     .then((response) => response.json())
//     .then((response) => {
//       console.log({ response });
//       alert(JSON.stringify(response));
//
//       return; // dispatch(addUser(response))
//     })
//     .catch((error) => {
//       console.log("Checking account error: ", user);
//       alert("Checking Account\nError: " + error.message);
//     });
// };
