var app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl: "templates/add.html",
			controller: "myCtrl1"
		})
		.when("/multiply", {
			templateUrl: "templates/mult.html",
			controller: "myCtrl2"
		})
})

app.service("NumberService", function () {
	this.NSnum1;
	this.NSnum2;
})

app.controller("myCtrl1", ["$scope", "NumberService", function ($scope, NumberService) {
	$scope.num1;
	$scope.num2;
	$scope.sum = NumberService.Nsum || 0;
	$scope.addThem = function () {
		$scope.sum = parseInt($scope.num1) + parseInt($scope.num2);
		NumberService.NSsum = $scope.sum;
	};
			}]);

app.controller("myCtrl2", ["$scope", function ($scope) {
	$scope.num1;
	$scope.num2;
	$scope.multiplyThem = function () {
		$scope.product = parseInt($scope.num1) * parseInt($scope.num2);
	};
				}]);