var app = angular.module("myApp", []);

app.controller("myCtrl", ["$scope", function ($scope) {

	$scope.picArray = [];
	$scope.infoSubmit = function () {
		var pic = {
			img: $scope.img,
			title: $scope.title,
			desc: $scope.desc
		}

		$scope.picArray.push(pic);
	}

	$scope.delete = function (index) {
		$scope.picArray.splice(index, 1)
	}
}]);