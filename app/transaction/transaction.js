'use strict';

angular.module('myApp')

.component('transaction', {
    templateUrl: 'transaction/transaction.html',
    controller: 'TransactionController'
})

.controller('TransactionController', ['$scope', '$location', function($scope, $location) {
    var _this = this;
    _this.transactions = {};

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            firebase.database().ref('users/' + user.uid + '/accounts').on('value', function(snapshot) {
                _this.accounts = snapshot.val();
                for(var account in _this.accounts) {
                    _this.accounts[account].total_uncleared = 0;
                    for(var transaction in _this.accounts[account].transactions) {
                        _this.transactions[transaction] = _this.accounts[account].transactions[transaction];
                        _this.transactions[transaction].account = _this.accounts[account].name
                    }
                }
            });
        } else {
            // No user is signed in.
        }
    });
}]);