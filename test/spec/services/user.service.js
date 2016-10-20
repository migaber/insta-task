(function() {
    'use strict';

    describe('Factory: Users', function () {
        beforeEach(module('instabugGithubApp'));

        // instantiate service
        var users, httpBackend;
        var apiBase = 'https://api.github.com';
        // jscs:disable
        var mockedOutput = [
            {
                login: "mojombo",
                id: 1000,
                avatar_url: "https://avatars.githubusercontent.com/u/1?v=3",
                gravatar_id: "",
                url: "https://api.github.com/users/mojombo",
                html_url: "https://github.com/mojombo",
                type: "User",
                site_admin: false
            },
            {
                login: "defunkt",
                id: 1001,
                avatar_url: "https://avatars.githubusercontent.com/u/2?v=3",
                gravatar_id: "",
                url: "https://api.github.com/users/defunkt",
                html_url: "https://github.com/defunkt",
                type: "User",
                site_admin: true
            },
        ];
        // jscs:enable

        beforeEach(inject(function(Users, _$httpBackend_) {
            users = Users;
            httpBackend = _$httpBackend_;
        }));

        it('should loads', function () {
            expect(users).toBeDefined();
        });
        // testing getAll()
        it ('should load all users getAll()', function() {
            var data;
            httpBackend.expectGET(apiBase + '/users').respond(mockedOutput);

            users.getAll().then(function(result) {
                data = result;
            });
            httpBackend.flush();
            expect(data.length).toBe(2);
        });
        // testing getUser()
        it ('should return false for undefined username getUser()', function() {
            var data;
            var user = users.getUser()
            expect(user).toBeFalsy();
        });
        it ('should return valid user object', function() {
            var data;
            httpBackend.expectGET(apiBase + '/users/first_user').respond(mockedOutput[0]);
            var user = users.getUser('first_user').then(function(result) {
                data = result;
            });
            httpBackend.flush();
            expect(data.id).toBe(1000);
        });

        afterEach(function() {
            // make sure all requests where handled as expected.
            httpBackend.verifyNoOutstandingRequest();
            httpBackend.verifyNoOutstandingExpectation();
        });
    });
})();
