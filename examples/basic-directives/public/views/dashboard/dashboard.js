var app = angular.module('battleArena.dashboard', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/dashboard', {
            controller: 'dashboardCtrl',
            templateUrl: 'public/views/dashboard/dashboard.tpl.html'
        })
})

app.controller('dashboardCtrl', function ($scope) {
    $scope.users = [
        {
            firstName: "Jon",
            lastName: "Smith",
            bestScore: "45000"
        },
        {
            firstName: "Peter",
            lastName: "Piper",
            bestScore: "2212000"
        },
        {
            firstName: "Beaver",
            lastName: "McFeaver",
            bestScore: "889000"
        }];
});