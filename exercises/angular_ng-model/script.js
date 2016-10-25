var app = angular.module('MyApp', []);

app.controller('MyControl', ['$scope', "$http", function ($scope, $http) {
	$scope.pics = [];
	var myRequest = $http.get('http://api.vschool.io:6543/hitlist.json');
	myRequest.then(function (response) {
		$scope.pics = response.data;
	});
}]);