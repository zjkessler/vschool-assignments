var app = angular.module("MyApp");

app.controller("MainController", ["$scope", function ($scope) {

    $scope.contacts = [
        {
            name: "Sarah Ziroll",
            phone: "(123)456-7890",
            email: "so-and-so@whatever.com"
        },
        {
            name: "Sue Ziroll",
            phone: "(123)456-7890",
            email: "so-and-so@whatever.com"
        },
        {
            name: "Ken Ziroll",
            phone: "(123)456-7890",
            email: "so-and-so@whatever.com"
        },
        {
            name: "Patty Ziroll",
            phone: "(123)456-7890",
            email: "so-and-so@whatever.com"
        },
        {
            name: "Nancy Smith",
            phone: "(123)456-7890",
            email: "so-and-so@whatever.com"
        },
        {
            name: "Chris Jones",
            phone: "(123)456-7890",
            email: "so-and-so@whatever.com"
        }
    ]
}]);
