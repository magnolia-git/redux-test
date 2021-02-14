import axios from 'axios';
import { baseUrl } from '../shared/baseUrl';

class AccountServices {

  getChecking(userName) {
      return axios.get(baseLocal + 'Users/' + userName + '/Checking Account');
  }

}

export default new AccountServices;
