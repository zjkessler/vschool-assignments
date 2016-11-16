var app = angular.module("myApp", []);


app.controller("myCtrl", ["$scope", "PostService", function ($scope, PostService) {

	//	POSTS to $scope
	$scope.updatedPost = {};
	$scope.addNewComment = "";


	PostService.getAllPosts()
		.then(function (response) {
			$scope.posts = response;
		})

	$scope.addPost = function (post) {
		PostService.addPost(post)
			.then(function (response) {
				$scope.newPost = response.data;
			})
	}

	$scope.editPost = function (updatedPost, index) {
		PostService.putPost(updatedPost)
			.then(function (response) {
				updatedPost.editing = false;
				$scope.posts[index] = updatedPost;
			})
	}


	$scope.deletePost = function (deletePost, post, index) {
		PostService.delete(deletePost._id)
			.then(function (response) {
				$scope.posts.splice(index, 1);
				return response.data;
			})
	}

	$scope.addComment = function (newComment, post, index) {

		post.comments.push(newComment);
		PostService.putComment(newComment, post._id)
			.then(function (response) {
				$("#commentArea").val("");
			})
		PostService.getAllPosts()
			.then(function (response) {
				$scope.posts = response;
			})
	};

	$scope.deleteComment = function (deletedComment, post, index) {
		PostService.deleteComment(deletedComment, post)
			.then(function (response) {
				$scope.posts.splice(index, 1);
				return response.data;
			})
//		PostService.getAllPosts()
	//			.then(function (response) {
	//				$scope.posts = response;
	//			})
	}


	$scope.addVote = function (updatedPost, index) {
		updatedPost.upVote += 1;
		PostService.putPost(updatedPost)
			.then(function (response) {
				console.log($scope.posts[index].comments = updatedPost)
				$scope.posts[index].comments.comment = updatedPost;
			})
		PostService.getAllPosts()
			.then(function (response) {
				$scope.posts = response;
			})
	}

	$scope.minusVote = function (updatedPost, index) {
		updatedPost.downVote += 1;
		PostService.putPost(updatedPost)
			.then(function (response) {
				$scope.posts[index] = updatedPost;
			})

	}
						  }]);
