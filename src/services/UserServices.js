import axios from 'axios';
import { baseLocal } from '../shared/baseUrl';

class UserServices {

    getUser(){
        return axios.get(baseLocal + 'Users/');
    }

    getUserById(userName){
        return axios.get(baseLocal + 'Users/' + userName);
    }

    postUser(user){
        return axios.post(baseLocal + 'Users', user);
    }

    postAccount(accountType, userName, data, jwt){
        return axios.post(baseLocal + 'Users/' + userName + '/' + accountType, { headers: {"Authorization" : `Bearer ${jwt}`}}, data);
    }

    deleteUser(userName){
        axios.delete(baseLocal + 'Users/' + userName);
    }

    deleteAccount(userName, accoutType, id, closingTo){
        return axios.patch(baseLocal + 'Users/' + userName + '/' + accoutType + '/' + id + '/' + closingTo);
    }
}

export default new UserServices();
