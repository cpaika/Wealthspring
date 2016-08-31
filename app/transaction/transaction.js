'use strict';

angular.module('myApp')

.component('transaction', {
    templateUrl: 'transaction/transaction.html',
    controller: 'TransactionController'
})

.controller('TransactionController', ['$scope', '$location', function($scope, $location) {
    var _this = this;

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            firebase.database().ref('users/' + user.uid).on('value', function(snapshot) {
                _this.transactions = [ snapshot.val() ];
            });
        } else {
            // No user is signed in.
        }
    });
}]);