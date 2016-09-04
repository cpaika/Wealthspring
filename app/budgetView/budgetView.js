'use strict';

angular.module('myApp')

.component('budgetView', {
    templateUrl: 'budgetView/budgetView.html',
    controller: 'AccountController'
})

.controller('BudgetViewController', ['$scope', '$location', function($scope, $location) {
    var _this = this;
    _this.accounts = {};
    $scope.loadCategories = function() {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                firebase.database().ref('users/' + user.uid + '/budget').on('value', function(snapshot) {
                    _this.categories = snapshot.val();
                });
            } else {
                // No user is signed in.
            }
        });
    };

    $scope.loadData();
}]);