'use strict';

angular.module('myApp')

.component('addCategory', {
    templateUrl: 'addCategory/addCategory.html',
    controller: 'AddCategoryController'
})

.controller('AddCategoryController', ['$scope', '$location', function($scope, $location) {

    $scope.addCategory = function(name) {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                var months = {};
                var month_name = new Date().getFullYear() + ':' + new Date().getMonth();
                months[month_name] = {
                    amount_budgeted: 0,
                    amount_spent: 0
                }
                firebase.database().ref('users/' + user.uid + '/categories/').push({
                    name: name,
                    months : months
                });
            } else {
                // No user is signed in.
            }
        });
    };
}]);