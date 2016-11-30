var app = angular.module("SantaApp");

app.directive("navbar", ["UserService", function (UserService) {


	return {
		templateUrl: "components/nav/nav.html",
		link: function (scope) {
			scope.UserService = UserService;
		}
	}
}]);