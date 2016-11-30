var app = angular.module("SantaApp", ["ngRoute", "Auth", 'ui.bootstrap'])

app.config(["$routeProvider", function ($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl: "components/home/home.html"
		})
		.when("/santa", {
			templateUrl: "components/santa/santa.html",
			controller: "SantaCtrl"
		});
}]);