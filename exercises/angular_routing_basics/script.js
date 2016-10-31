var app = angular.module("myApp", ['ngRoute'])

app.config("$routeProvider", [function ($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'homeCtrl',
			templateUrl: 'templates/home.html'
		})
		.when('/about', {
			controller: 'aboutCtrl',
			templateUrl: 'templates/about.html'
		})
		.when('/love', {
			controller: 'loveCtrl',
			templateUrl: 'templates/love.html'
		})
		.otherwise({
			redirectTo: '/home'
		})
}]);