'use strict';

angular.module('myApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'LoginViewController'
  });
}])

.controller('LoginViewController', ['$scope', function($scope) {
    this.isRegisterFormOpen = false;

    $scope.createAccount = function(username, password, email) {
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("ERROR Contacting firebase: " + errorMessage);
        });
    };

    $scope.login = function(email, password) {
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("ERROR Contacting firebase: " + errorMessage);
        });
    };
}]);