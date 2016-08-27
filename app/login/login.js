'use strict';

angular.module('myApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'LoginViewController'
  });
}])

.controller('LoginViewController', [function() {
    this.isRegisterFormOpen = false;
}]);