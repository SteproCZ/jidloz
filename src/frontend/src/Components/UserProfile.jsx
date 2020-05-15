var UserProfile = (function() {


    var id = localStorage.getItem('id');
    var username = localStorage.getItem('username');
    var role = localStorage.getItem('role');


    var getId = function() {
        return id;
    };

    var setId = function(newId) {
        id = newId;
        localStorage.setItem('id',id);
    };

    var getUsername = function() {
        return username;
    };

    var setUsername = function(newUsername) {
        username = newUsername;
        localStorage.setItem('username',setUsername);
    };

    var isProducer = function() {
        return role.equals("ROLE_PRODUCER");
    };

    var getRole = function() {
        return role;
    };

    var setRole = function(newRole) {
        role = newRole;
        localStorage.setItem('role',role);
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