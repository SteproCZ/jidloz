import AuthService from "../service/AuthService";

const LoggedProfile = (function () {

    let idUser = AuthService.getUserInfo().id;
    let role = AuthService.getUserInfo().role;

    const clear = () => {
        localStorage.clear();
    };

    const getIdUser = () => {
        return idUser;
    };

    const isLogged = () =>  {
        return ("ROLE_USER"===(role) || "ROLE_PRODUCER"===(role));
    };

    const isUser = () =>  {
        return role === "ROLE_USER";
    };

    const isProducer = () =>  {
        return role === "ROLE_PRODUCER";
    };

    const getRole = () => {
        return role;
    };

    const login = (value) => {
        idUser = value.id;
        localStorage.setItem("userInfo", JSON.stringify(value));
    }

    return {
        isLogged : isLogged,
        login : login,
        clear : clear,
        getIdUser: getIdUser,
        isUser: isUser,
        isProducer: isProducer,
        getRole: getRole
    }

})();

export default LoggedProfile