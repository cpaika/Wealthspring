'use strict';

angular.module('myApp')

.component('budgetList', {
    templateUrl: 'budgetList/budgetList.html',
    controller: 'BudgetListController'
})

.controller('BudgetListController', ['$scope', '$location', function($scope, $location) {
    var _this = this;
    $scope.loadData = function() {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                firebase.database().ref('users/' + user.uid + '/categories').on('value', function(snapshot) {
                    _this.categories = snapshot.val();
                });
            } else {
                // No user is signed in.
            }
        });
    };

    $scope.loadData();
}]);