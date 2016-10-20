'use strict';

describe('Controller: SingleuserCtrl', function () {

    // load the controller's module
    beforeEach(module('instabugGithubApp'));

    var SingleuserCtrl,
    scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        SingleUserCtrl = $controller('SingleUserCtrl', {
            $scope: scope
            // place here mocked dependencies
        });
    }));

    // it('should attach a list of awesomeThings to the scope', function () {
    // expect(SingleuserCtrl.awesomeThings.length).toBe(3);
    // });
});
