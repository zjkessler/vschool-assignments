var app = angular.module("BlogApp", ["ngRoute"]);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/blog", {
            templateUrl: "components/blog-list/blog-list.html",
            controller: "BlogListController"
        })
        .when("/blog/:blogId", {
            templateUrl: "components/blog-detail/blog-detail.html",
            controller: "BlogDetailController"
        })
}]);
