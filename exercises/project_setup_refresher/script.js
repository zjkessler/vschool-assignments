var app = angular.module("myApp", []);

app.controller("myCtrl1", ["$scope", function ($scope) {
	$scope.num1;
	$scope.num2;
	$scope.addThem = function () {
		$scope.sum = parseInt($scope.num1) + parseInt($scope.num2);
	};
			}]);

app.controller("myCtrl2", ["$scope", function ($scope) {
	$scope.num1;
	$scope.num2;
	$scope.multiplyThem = function () {
		$scope.product = parseInt($scope.num1) * parseInt($scope.num2);
	};
				}]);