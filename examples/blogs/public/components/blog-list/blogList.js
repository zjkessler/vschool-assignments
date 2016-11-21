var app = angular.module("BlogApp");

app.controller("BlogListController", ["$scope", "BlogService", function($scope, BlogService) {

    BlogService.getBlogs().then(function(blogs) {
        $scope.blogs = blogs;
    });
}]);
