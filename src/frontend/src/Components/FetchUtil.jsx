import AuthService from "../service/AuthService";

export default class FetchUtil {

    static fetchPost(url, body) {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: '' + AuthService.getUserInfo().token},
            body: body
        };

        return fetch(url, requestOptions);
    }

    static fetchGet(url) {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: '' + AuthService.getUserInfo().token}
        };

        return fetch(url, requestOptions);
    }
}