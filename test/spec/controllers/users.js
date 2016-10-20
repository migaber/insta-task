'use strict';

describe('Controller: UsersCtrl', function () {

    // load the controller's module
    beforeEach(module('instabugGithubApp'));

    var UsersCtrl,
      scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        UsersCtrl = $controller('UsersCtrl', {
            $scope: scope
            // place here mocked dependencies
        });
    }));

    it('users to be empty array', function () {
        expect(scope.users.length).toBe(0);
    });
});
