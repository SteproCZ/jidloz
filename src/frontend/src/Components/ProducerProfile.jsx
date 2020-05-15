var ProducerProfile = (function() {
    var id = localStorage.getItem('id');
    var name = localStorage.getItem('name');
    var role = localStorage.getItem('role');


    var getId = function() {
        return id;
    };

    var setId = function(newId) {
        id = newId;
        localStorage.setItem('id',id);
    };

    var getName = function() {
        return name;
    };

    var setName = function(newName) {
        name = newName;
        localStorage.setItem('name', name);
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
        getName: getName,
        setName: setName,
        getRole: getRole,
        setRole: setRole
    }


})();

export default ProducerProfile