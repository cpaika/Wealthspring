'use strict';

angular.module('myApp.dashboard', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/dashboard', {
    templateUrl: 'dashboard/dashboard.html',
    controller: 'DashboardViewController'
  });
}])

.controller('DashboardViewController', ['$scope', '$location', function($scope, $location) {

}]);