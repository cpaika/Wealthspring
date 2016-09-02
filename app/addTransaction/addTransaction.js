'use strict';

angular.module('myApp')

.component('addTransaction', {
    templateUrl: 'addTransaction/addTransaction.html',
    controller: 'AddTransactionController'
})

.controller('AddTransactionController', ['$scope', '$location', function($scope, $location) {

    $scope.addTransaction = function(payee, account, category, amount, cleared) {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                firebase.database().ref('users/' + user.uid).push({
                    payee: payee,
                    account: account,
                    category: category,
                    amount: amount,
                    cleared: false
                });
            } else {
                // No user is signed in.
            }
        });
    };
}]);