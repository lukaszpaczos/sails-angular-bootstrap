'use strict';

/**
 * Configure client-side routes (#/foo, #/bar, etc.)
 */

angular.module('app').config([
    '$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'js/app/views/partial1.html',
            controller: 'Test1Controller'
        });

        $routeProvider.when('/view2', {
            templateUrl: 'js/app/views/partial2.html',
            controller: 'Test2Controller'
        });

        $routeProvider.otherwise({
            redirectTo: '/view1'
        });
    }
]);