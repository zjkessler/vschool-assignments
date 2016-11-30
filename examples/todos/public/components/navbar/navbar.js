var app = angular.module("TodoApp");

app.directive("navbar", ["UserService", function (UserService) {
    return {
        templateUrl: "components/navbar/navbar.html",

        // The link function connects the HTML to this javascript. This allows us to
        // add stuff to the $scope object of the HTML of this directive without necessarily
        // having to write a whole controller for it.
        link: function(scope) {

            // The only thing we're doing is putting a reference to the entire UserService
            // we wrote right on the scope of the navbar. This way, when something on the
            // UserService changes such as the value of running UserService.isAuthenticated(),
            // it'll update on the scope of this navbar directive immediately (because of the
            // way objects pass by reference instead of by value). Go check out the HTML of the
            // navbar and you'll see that we're using ng-show and ng-hide based on the value
            // of "UserService.isAuthenticated". We can do this from the HTML because UserService
            // is on the $scope of this directive. (One tricky fact - inside directives we don't
            // need to call it $scope per se. We could call it whatever we want and it will
            // always be referring to the scope of the directive).
            scope.UserService = UserService;
        }
    }
}]);
