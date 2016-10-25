var app = angular.module("myApp", ['ngRoute']);

app.controller("homeCtrl", ["$scope", function ($scope) {

	$scope.flag = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Oregon.svg/750px-Flag_of_Oregon.svg.png';

}]);