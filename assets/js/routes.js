angular.module('app').config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {
        templateUrl: 'js/app/views/partial1.html', controller: 'MyCtrl1'
    });

    $routeProvider.when('/view2', {
        templateUrl: 'js/app/views/partial2.html', controller: 'MyCtrl2'
    });

    $routeProvider.otherwise({
        redirectTo: '/view1'
    });
}]);