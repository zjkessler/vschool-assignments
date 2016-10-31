var app = angular.module("MyApp");

app.directive("contactCard", [function() {
    return {
        restrict: "E",
        templateUrl: "components/directives/contact-card/contact-card.html",
        scope: {
            person: "=",
        }
    }
}]);
