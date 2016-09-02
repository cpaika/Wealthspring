'use strict';

angular.module('myApp')

.component('accountList', {
    templateUrl: 'accountList/accountList.html',
    controller: 'AccountController'
})

.controller('AccountController', ['$scope', '$location', function($scope, $location) {
    var _this = this;

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            firebase.database().ref('users/' + user.uid + '/accounts').on('value', function(snapshot) {
                _this.accounts = snapshot.val();
            });
        } else {
            // No user is signed in.
        }
    });
}]);