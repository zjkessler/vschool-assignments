var app = angular.module("Auth");

app.controller("LogoutController", ["$scope", "$location", "UserService", function ($scope, $location, UserService) {

    // This is the only thing this controller does. It doesn't even have an associated HTML view, since that wouldn't
    // make much sense for a logout feature. Instead, when the user is routed to "/logout", the code in this controller
    // runs, logs them out (deletes the token from localStorage), and then immediately redirects them to the home page.
    UserService.logout();
    $location.path("/");
}]);