'use strict';

angular.module('myApp')

.component('addAccount', {
    templateUrl: 'addAccount/addAccount.html',
    controller: 'addAccountController'
})

.controller('addAccountController', ['$scope', '$location', function($scope, $location) {

    $scope.addAccount = function(name) {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                firebase.database().ref('users/' + user.uid + '/accounts/').push({
                    name: name
                });
            } else {
                // No user is signed in.
            }
        });
    };
}]);