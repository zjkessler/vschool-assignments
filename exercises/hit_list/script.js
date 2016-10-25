var app = angular.module("MyApp", []);

app.controller("MyControl", ['$scope', '$http', function ($scope, $http) {
	$scope.input1 = "words space";
	$scope.input2 = "new space";
	$scope.input3 = "blank space";
}]);