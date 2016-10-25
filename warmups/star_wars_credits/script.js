var app = angular.module("myApp", []);

//var play = $("#music");
//play.autoplay = true;
//play.load();

app.controller("myCtrl", ["$scope", "$http", function ($scope, $http) {
	$http.get('http://swapi.co/api/films/1/')
		.then(function (response) {
			$scope.open = response.data.opening_crawl;
		})
}]);