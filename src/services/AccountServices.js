import axios from 'axios';
import { baseUrlAWS } from '../shared/baseUrl';

class AccountServices {

  postCheckingAccount(account) {
    return axios.post(baseUrlAWS + 'api/Me/CheckingAccount', account);
  }



}

export default new AccountServices;
