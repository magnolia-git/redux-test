import axios from 'axios';
import { baseUrlAWS } from '../shared/baseUrl';

class UserServices {

    getUser(){
        return axios.get(baseUrlAWS + 'api/Me');
    }

    // getUserById(userName){
    //     return axios.get(baseLocal + 'Users/' + userName);
    // }

    postUser(user){
        return axios.post(baseUrlAWS + 'api/authenticate/createUser', user);
    }



    // postAccount(accountType, userName, data, jwt){
    //     return axios.post(baseUrlAWS + 'Users/' + userName + '/' + accountType, { headers: {"Authorization" : `Bearer ${jwt}`}}, data);
    // }

    // deleteUser(userName){
    //     axios.delete(baseUrlAWS + 'Users/' + userName);
    // }

    // deleteAccount(userName, accoutType, id, closingTo){
    //     return axios.patch(baseUrlAWS + 'Users/' + userName + '/' + accoutType + '/' + id + '/' + closingTo);
    // }
}

export default new UserServices();
