var app = angular.module("myApp", ['ngRoute'])

app.config(function ($routeProvider) {
	$routeProvider.when('/about', {
		controller: 'aboutCtrl',
		templateUrl: 'templates/about.html'
	}).when('/love', {
		controller: 'loveCtrl',
		templateUrl: 'templates/love.html'
	}).otherwise('/home', {
		controller: 'homeCtrl',
		templateUrl: 'templates/home.html'
	})
})