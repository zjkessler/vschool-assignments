var app = angular.module("myApp", []);
app.service("PostService", ["$http", function ($http) {
	//get request for POSTS 
	this.getAllPosts = function () {
		return $http.get("/posts")
			.then(function (response) {
				return response.data;
			})
	}

	//add request for POSTS 
	this.addPost = function (newPostObj) {
		return $http.post("/posts", newPostObj)
			.then(function (response) {
				return response.data;
			})
	}

	//update request for POSTS 
	this.putPost = function () {

	}

	//delete request for POSTS 
	this.delete = function () {

	}
}]);


app.controller("myCtrl", ["$scope", "PostService", "CommentService", function ($scope, PostService, CommentService) {

	//	POSTS to $scope


	//	COMMENTS to scope


}]);