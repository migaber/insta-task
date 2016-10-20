(function() {
    'use strict';

    angular.module('instabugGithubApp').controller('SingleUserCtrl', getUserDetailsCallback);

    getUserDetailsCallback.$inject = ['$scope', 'singleUser'];

    function getUserDetailsCallback(scope, singleUser) {
        scope.user = singleUser;
    }

})();
