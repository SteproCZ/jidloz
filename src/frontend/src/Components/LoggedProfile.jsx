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
        return ("ROLE_USER"===(role) || "ROLE_PRODUCER"===(role));
    };

    const isUser = () =>  {
        return ("ROLE_USER"===(role));
    };

    const isProducer = () =>  {
        return "ROLE_PRODUCER"===(role);
    };

    const getRole = () => {
        return role;
    };

    const removeRole = () =>  {
        role = "";
        localStorage.setItem('role', "");
    };

    const setRoleUser = () => {
        role = "ROLE_USER";
        localStorage.setItem('role', "ROLE_USER");
    };

    const setRoleProducer = () => {
        role = "ROLE_PRODUCER";
        localStorage.setItem('role', "ROLE_PRODUCER");
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
        setRoleUser: setRoleUser,
        setRoleProducer: setRoleProducer,
        isUser: isUser,
        isProducer: isProducer,
        getRole: getRole,
        removeRole: removeRole
    }

})();

export default LoggedProfile