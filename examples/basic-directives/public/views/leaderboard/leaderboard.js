var app = angular.module('battleArena.leaderboard', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/leaderboard', {
            controller: 'leaderboardCtrl',
            templateUrl: 'public/views/leaderboard/leaderboard.tpl.html'
        })
})

app.controller('leaderboardCtrl', function ($scope) {
    $scope.users = [
        {
            firstName: "Daniel",
            lastName: "Tiger",
            bestScore: "425000"
        },
        {
            firstName: "Dora",
            lastName: "Explorer",
            bestScore: "6654"
        },
        {
            firstName: "Princess",
            lastName: "Sophia",
            bestScore: "111234"
        }];
});