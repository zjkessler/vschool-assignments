var app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider) {
	$routeProvider.when('/blue', {
		controller: 'myCtrl',
		templateUrl: 'templates/blue.html'
	}).when('/red', {
		controller: 'myCtrl',
		templateUrl: 'templates/red.html'
	})
})


app.service("BlueService", function () {

	this.count = 100;
	this.increment = function () {
		this.count++;
		return this.count;
	}

	this.decrement = function () {
		this.count--;
		return this.count;
	}

	this.reset = function () {
		if (this.count === 0) {
			this.count = 100;
		}
	}
})

app.service("RedService", function () {

	this.count = 100;
	this.increment = function () {
		this.count++;
		return this.count;
	}

	this.decrement = function () {
		this.count--;
		return this.count;
	}

	this.reset = function () {
		if (this.count === 0) {
			this.count = 100;
		}
	}
})


app.controller("myCtrl", ["$scope", "BlueService", "RedService", function ($scope, $BS, $RS) {
	$scope.blueNum = $BS;
	$scope.redNum = $RS;

	$scope.blueClick = function () {
		$scope.blueNum.increment();
		$scope.redNum.decrement();
		$scope.redNum.reset();
	}

	$scope.redClick = function () {
		$scope.redNum.increment();
		$scope.blueNum.decrement();
		$scope.blueNum.reset();
	}

			}])