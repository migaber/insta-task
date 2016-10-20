(function() {
    'use strict';

    angular.module('instabugGithubApp').factory('Users', ['$http', '$log', '$q', UsersFactory]);

    function UsersFactory($http, $log, $q) {
        var API_BASE =  'https://api.github.com';
        var users = {
            getAll  : allUsers,
            getUser : getUser
        };
        return users;

        function allUsers(since) {
            var request = '';

            if (typeof(since) === 'undefined') {
                request = API_BASE + '/users';
            } else {
                request = API_BASE + '/users?since=' + since;
            }
            return $http.get(request)
              .then(getUsersListDone)
              .catch(getUsersListError);

            function getUsersListDone(res) {
                return res.data;
            }

            function getUsersListError(error) {
                $log.error('Error occured: ' + error.data);
                return $q.reject(error.data);
            }
        }

        // Return single user account details based on the username
        function getUser(username) {
            if (typeof(username) === 'undefined') {
                $log.error('empty username provided');
                return false;
            }
            return $http.get(API_BASE + '/users/' + username)
              .then(getUserProfileDone)
              .catch(getUserProfileError);

            function getUserProfileDone(res) {
                return res.data;
            }

            function getUserProfileError(error) {
                $log.error('Error occured: ' , error.data.message);
                return $q.reject(error);
            }
        }
    }
})();
