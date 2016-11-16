var app = angular.module("myApp");


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
	this.putPost = function (updatedPost) {

		return $http.put("/posts/" + updatedPost._id, updatedPost)
			.then(function (response) {
				console.log("response ", response);
				return response.data;
			})
	}


	//delete request for POSTS 
	this.delete = function (postId) {
		return $http.delete("/posts/" + postId)
			.then(function (response) {
				return response.data;
			});
	}
	this.deleteComment = function (commentId, postId) {
		return $http.delete("/posts/" + postId + "/comments/" + commentId)
			.then(function (response) {
				return response.data;

			})
	}

	this.putComment = function (comment, postId) {
		var newComment = {
			comment: comment
		};

		console.log(comment, postId);
		return $http.put("/posts/" + postId + "/comments/", newComment)
			.then(function (updatedObject) {
				console.log(updatedObject.data);
				return updatedObject.data;
			})


	}
			}]);