var app = angular.module("MyApp");

app.controller("StudentsController", ["$scope", function($scope) {
    $scope.students = [
        {
            name: "Bob",
            phone: "(801) 616-6474",
            email: "bob@gmail.com"
        },
        {
            name: "Sam",
            phone: "(801) 617-6474",
            email: "sam@gmail.com"
        }
    ];
}]);
