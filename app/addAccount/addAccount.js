'use strict';

angular.module('myApp')

.component('addAccount', {
    templateUrl: 'addAccount/addAccount.html',
    controller: 'AddAccountController'
})

.controller('AddAccountController', ['$scope', '$location', function($scope, $location) {

    $scope.addAccount = function(name) {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                firebase.database().ref('users/' + user.uid + '/accounts/').push({
                    name: name,
                    total_uncleared: 0
                });
            } else {
                // No user is signed in.
            }
        });
    };
}]);