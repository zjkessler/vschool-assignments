var app = angular.module('myApp', []);

app.controller("myCtrl", ["$scope", function ($scope) {

	//array of strings in a list

	$scope.array = ["1", "zach", "40"];

}])