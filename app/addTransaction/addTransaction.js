'use strict';

angular.module('myApp')

.component('addTransaction', {
    templateUrl: 'addTransaction/addTransaction.html',
    controller: 'AddTransactionController'
})

.controller('AddTransactionController', ['$scope', '$location', function($scope, $location) {

    $scope.addTransaction = function(payee, accountName, category, amount, cleared) {
        var _this = this;
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                //Only listen once otherwise never ending loop...
                firebase.database().ref('users/' + user.uid + '/accounts').once('value').then(function(snapshot) {
                    _this.accounts = snapshot.val();
                    for(var account in _this.accounts) {
                        if(_this.accounts[account].name === accountName) {
                            _this.accountName = account
                            break;
                        }
                    }
                    firebase.database().ref('users/' + user.uid + '/accounts/' + _this.accountName).push({
                        payee: payee,
                        account: account,
                        category: category,
                        amount: amount,
                        cleared: false
                    }); 
                });
            } else {
            // No user is signed in.
            }
        });
    };
}]);