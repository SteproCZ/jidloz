const UserProfile = (function () {


    let id = localStorage.getItem('id');
    let username = localStorage.getItem('username');
    let role = localStorage.getItem('role');


    const getId = function () {
        return id;
    };

    const setId = function (newId) {
        id = newId;
        localStorage.setItem('id', id);
    };

    const getUsername = function () {
        return username;
    };

    const setUsername = function (newUsername) {
        username = newUsername;
        localStorage.setItem('username', setUsername);
    };

    const isUser = function () {
        return role.equals("ROLE_USER");
    };

    const getRole = function () {
        return role;
    };

    const setRole = function (newRole) {
        role = newRole;
        localStorage.setItem('role', role);
    };


    return {
        getId: getId,
        setId: setId,
        getUsername: getUsername,
        setUsername: setUsername,
        getRole: getRole,
        setRole: setRole
    }

})();

export default UserProfile