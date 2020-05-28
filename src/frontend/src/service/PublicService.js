import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080/public/';

class PublicService {

    registrationUser(newUser){
        return axios.post(USER_API_BASE_URL + "registration", newUser);
    }

    getStatInfo(){
        return axios.get(USER_API_BASE_URL + "getAllStatistic");
    }
}

export default new PublicService();