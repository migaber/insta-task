(function() {
    'use strict';
    angular.module('instabugGithubApp').controller('UsersCtrl', getUsersList);

    getUsersList.$inject = ['$scope', 'Users'];

    function getUsersList(scope, Users) {
        Users.getAll().then(listAll);
        scope.users = [];
        scope.load = true;
        scope.more = loadMore;
        scope.firstTime = true;

        function listAll(usersArr) {
            scope.users = scope.users.concat(usersArr);
            scope.load = false;
            scope.empty = true;
            if (scope.firstTime) {
                scope.user = Users.getUser(usersArr[0].login).then(function(user) {
                    console.log(user);
                    scope.user = user;
                    scope.empty = false
                });
            } else {
                scope.empty = false;
            }
        }

        function loadMore() {
            var nextID = scope.users[scope.users.length - 1].id;
            scope.load = true;
            scope.firstTime = false;
            Users.getAll(nextID).then(listAll);
        }
    }
})();
