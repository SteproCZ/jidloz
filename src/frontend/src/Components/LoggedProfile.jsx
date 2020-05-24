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

    const isUser = () =>  {
        return ("ROLE_USER"===(role) || "ROLE_PRODUCER"===(role));
    };

    const isProducer = () =>  {
        return "ROLE_PRODUCER"===(role);
    };

    const getRole = () => {
        return role;
    };

    const removeRole = () =>  {
        localStorage.setItem('role', "");
    };

    const setRoleUser = () => {
        localStorage.setItem('role', "ROLE_USER");
    };

    const setRoleProducer = () => {
        localStorage.setItem('role', "ROLE_PRODUCER");
    };

    const login = (value) => {
        localStorage.setItem("userInfo", JSON.stringify(value));
    }

    return {
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