var app = angular.module('battleArena');

app.directive('userList', function () {
    return {
        restrict: 'E',
        scope: {
            'people': '='
        },
        templateUrl: 'public/views/directives/users.tpl.html'
    };
});