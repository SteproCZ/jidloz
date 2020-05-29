import axios from 'axios';
import {WEB_ADDRESS} from "../Components/Constants";

const USER_API_BASE_URL = WEB_ADDRESS+'token/';

class AuthService {

    login(credentials){
        return axios.post(USER_API_BASE_URL + "generate-token", credentials);
    }

    setUserInfo(value){
        localStorage.setItem("userInfo", JSON.stringify(value));
    }

    getUserInfo(){
        return JSON.parse(localStorage.getItem("userInfo"));
    }

    getUserIdUser(){
        let userInfo = JSON.parse(localStorage.getItem("userInfo"));
        return userInfo != null ? userInfo.id : userInfo;
    }

    getUserRole(){
        let userInfo = JSON.parse(localStorage.getItem("userInfo"));
        return userInfo != null ? userInfo.role : userInfo;
    }

    getAuthHeader() {
        return {headers: {Authorization: 'Bearer ' + this.getUserInfo().token }};
    }

    logOut() {
        return axios.post(USER_API_BASE_URL + 'logout', {}, this.getAuthHeader());
    }



}

export default new AuthService();