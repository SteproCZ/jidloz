const LoggedProfile = (function () {

    let idUser = localStorage.getItem('idUser');
    let idProducer = localStorage.getItem('idProducer');
    let role = localStorage.getItem('role');



    const getIdUser = () => {
        return idUser;
    };

    const setIdUser = (newId) =>  {
        idUser = newId;
        localStorage.setItem('idUser', idUser);
    };

    const getIdProducer = () =>  {
        return idProducer;
    };

    const setIdProducer = (newId) =>  {
        idUser = newId;
        localStorage.setItem('idProducer', idProducer);
    };

    const isUser = () =>  {
        return "ROLE_USER".equals(role);
    };

    const isProducer = () =>  {
        return "ROLE_PRODUCER".equals(role);
    };

    const getRole = () => {
        return role;
    };

    const removeRole = () =>  {
        localStorage.setItem('role', "");
    };

    const setRoleUser = () => {
        if("ROLE_PRODUCER"==(role)){
            localStorage.setItem('role', "BOTH_ROLES");
            console.log("BOTH_ROLES");
        }else{
            localStorage.setItem('role', "ROLE_USER");
            console.log("ROLE_USER");
        }
    };

    const setRoleProducer = () => {
        if("ROLE_USER"==(role)){
            localStorage.setItem('role', "BOTH_ROLES");
        }else{
            localStorage.setItem('role', "ROLE_PRODUCER");
        }
    };

    const isBothRole = () => {
        return "BOTH_ROLES".equals(role);
    };

    const setBothRole = () => {
       localStorage.setItem('role', "BOTH_ROLES");
    };


    return {
        getIdUser: getIdUser,
        setIdUser: setIdUser,
        getIdProducer: getIdProducer,
        setIdProducer: setIdProducer,
        setRoleUser: setRoleUser,
        setRoleProducer: setRoleProducer,
        setBothRole: setBothRole,
        isUser: isUser,
        isProducer: isProducer,
        isBothRole: isBothRole,
        getRole: getRole,
        removeRole: removeRole
    }

})();

export default LoggedProfile