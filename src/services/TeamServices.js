import axios from 'axios';
import { baseUrl } from '../shared/baseUrl';

class TeamServices {

  getTeam(){
    return axios.get(baseUrl + "team");
  }

}

export default new TeamServices();
