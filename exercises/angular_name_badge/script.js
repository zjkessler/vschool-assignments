var app = angular.module("MyApp", []);

app.controller("MyControl", ["$scope", function ($scope) {
	$scope.badgeArray = [];

	$scope.submitForm = function () {
		var badge = {
			fname: $scope.fname,
			lname: $scope.lname,
			email: $scope.email,
			pob: $scope.pob,
			phone: $scope.phone,
			FF: $scope.FF,
		}

		$scope.badgeArray.push(badge);
	};

	}]);