import AuthService from "../service/AuthService";

const LoggedProfile = (function () {

    let idUser = localStorage.getItem('idUser');
    let idProducer = localStorage.getItem('idProducer');
    let role = localStorage.getItem('role');

    const clear = () => {
        localStorage.clear();
    };

    const getIdUser = () => {
        return idUser;
    };

    const setIdUser = (newId) =>  {
        idUser = newId;
        localStorage.setItem('idUser', idUser);
    };

    const isLogged = () =>  {
        return ("ROLE_USER"===(AuthService.getUserInfo().role) || "ROLE_PRODUCER"===(AuthService.getUserInfo().role));
    };

    const isUser = () =>  {
        return AuthService.getUserInfo().role === "ROLE_USER";
    };

    const isProducer = () =>  {
        return AuthService.getUserInfo().role === "ROLE_PRODUCER";
    };

    const getRole = () => {
        return AuthService.getUserInfo().role;
    };

    const removeRole = () =>  {
        role = "";
        localStorage.setItem('role', "");
    };

    const login = (value) => {
        console.log(value);
        localStorage.setItem("userInfo", JSON.stringify(value));
    }

    return {
        isLogged : isLogged,
        login : login,
        clear : clear,
        getIdUser: getIdUser,
        setIdUser: setIdUser,
        isUser: isUser,
        isProducer: isProducer,
        getRole: getRole,
        removeRole: removeRole
    }

})();

export default LoggedProfile