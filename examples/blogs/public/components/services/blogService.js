var app = angular.module("BlogApp");

app.service("BlogService", ["$http", function ($http) {

    this.getBlogs = function () {
        return $http.get("/blog").then(function (response) {
            return response.data;
        }, function (err) {
            console.warn(err);
        });
    };

    this.getBlog = function (id) {
        return $http.get(`/blog/${id}`).then(function (response) {
            return response.data;
        }, function (err) {
            console.warn(err);
        });
    }



}]);
