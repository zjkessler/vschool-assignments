var app = angular.module("myApp", ["ngRoute"]);

app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/list_1', {
			templateURL: 'list_1/list_1.tpl.html',
			controller: ""
		})
		.when('/list_2', {
			templateURL: 'list_1/list_1.tpl.html',
			controller: ""
		});

}]);