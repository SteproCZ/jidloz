import axios from 'axios';
import {WEB_ADDRESS} from "../Components/Constants";

const USER_API_BASE_URL = WEB_ADDRESS+'public/';

class PublicService {

    registrationUser(newUser){
        return axios.post(USER_API_BASE_URL + "registration", newUser);
    }

    getStatInfo(){
        return axios.get(USER_API_BASE_URL + "getAllStatistic");
    }
}

export default new PublicService();