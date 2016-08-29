'use strict';

angular.module('myApp')

.component('addTransaction', {
    templateUrl: 'addTransaction/addTransaction.html',
    controller: 'AddTransactionController'
})

.controller('AddTransactionController', ['$scope', '$location', function($scope, $location) {

    $scope.addTransaction = function(payee, amount) {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                firebase.database().ref('users/' + user.uid).set({
                    payee: payee,
                    amount: amount,
                });
            } else {
                // No user is signed in.
            }
        });
    };
}]);