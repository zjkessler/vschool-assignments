var app = angular.module("myApp", []);

app.controller("mainCtrl", ["$scope", "MyServcie", function ($scope, MyService) {
	//	$http.get("http://swapi.co/api/people/1/")
	//		.then(function (response) {
	//			$scope.luke = response.data;
	//			$http.get($scope.luke.homeworld).then(function (response) {
	//					$scope.luke.homeworld = response.data.name;
	//					$http.get($)
	//				}
	//			});

	MyService.getLuke()
		.then(function (luke) {
			$scope.luke = luke;
		})

}]);

app.service('MyService', ["$http", function ($http) {
	this.getLuke = function () {
		//this. referes to the service which is set up like a constructor, causing getLuke to be added as a Method of the service
		var luke = {};

		return $http.get("http://swapi.co/api/people/1/")
			.then(function (response) {
				luke.name = response.data.name;
				luke.hairColor = response.data.hair_color;
				luke.eyeColor = response.data.eye_color;
				return $http.get(response.data.homeworld);
			})
			.then(function (response) {

			})

	}
}])