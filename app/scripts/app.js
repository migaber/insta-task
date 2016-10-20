(function() {
    'use strict';
    /**
    * @ngdoc overview
    * @name instabugGithubApp
    * @description
    * # instabugGithubApp
    *
    * Main module of the application.
    */
    angular
    .module('instabugGithubApp', [
      'ngSanitize',
      'ngTouch',
      'ui.router',
      'angular-loading-bar',
    ]);

    angular.module('instabugGithubApp').config(configMyApp);
    configMyApp.$inject = ['$logProvider', '$stateProvider', '$urlRouterProvider',
    '$locationProvider', 'cfpLoadingBarProvider'];

    angular.module('instabugGithubApp').run(runMyApp);
    runMyApp.$inject = ['$rootScope'];

    function configMyApp(logProvider, stateProvider, urlRouterProvider, locationProvider, cfpLoadingBarProvider) {
        logProvider.debugEnabled(true);
        urlRouterProvider.rule(function($injector, $location) {
            var path = $location.path();
            var hasTrailingSlash = path[path.length - 1] === '/';

            if (hasTrailingSlash) {
                //if last charcter is a slash, return the same url without the slash
                var newPath = path.substr(0, path.length - 1);
                return newPath;
            }
        });
        locationProvider.html5Mode(true);
        stateProvider
        .state('home', {
            'url' : '/',
            'template' : '<div class="column"><h1 class="title">Home</h1></div>',
            'title' : 'Home Page'
        })
        .state('about', {
            'url' : '/about',
            'template' : '<div class="column"><h1 class="title">About Page</h1></div>',
            'title' : 'About Page'
        })
        .state('users', {
            'url' : '/users',
            'templateUrl': 'views/users/layout.html',
            'title' : 'All Users - Github Users',
            'controller': 'UsersCtrl'
        })
        .state('users.details', {
            'url' : '/{userName}',
            'templateUrl': 'views/users/details.view.html',
            'controller': 'SingleUserCtrl',
            'resolve': {
                singleUser: function($stateParams, $state, Users, $q, $log) {
                    var defObj = $q.defer();
                    Users.getUser($stateParams['userName']).then(function(user) {
                        defObj.resolve(user);
                    }).catch(function(error) {
                        $state.go('users');
                        defObj.reject();
                    });
                    return defObj.promise;
                },
            }
        });
        urlRouterProvider.otherwise('/');
        cfpLoadingBarProvider.includeSpinner = false;
    }

    function runMyApp($rootScope) {
        $rootScope.$on('$stateChangeSuccess', function(e, toState, toParam, fromState, fromParam) {
            $rootScope.pageTitle = toState.title;
        });
    }
})();
