var app = angular.module("myApp", []);

app.controller('myCtrl', ['$scope', '$http', function ($scope, $http) {

	$scope.editing = false;

	$http.get('http://api.vschool.io/zjk/todo').then(function (response) {
		$scope.allList = response.data;
	});


	$scope.addTodo = function (todo) {

		$http.post('http://api.vschool.io/zjk/todo', todo).then(function (response) {
			$scope.todo = response.data;
			console.log(todo);
		}, function (error) {
			console.log("there was an error!")
		});
	};

	$scope.delete = function (todoToDelete, index) {

		$http.delete('http://api.vschool.io/zjk/todo/' + todoToDelete._id)
			.then(function (response) {
				response.data;
				$scope.allList.splice(index, 1);
			})
	};

	$scope.updateTodo = function (item) {
		$http.put('http://api.vschool.io/zjk/todo/' + item._id)
			.then(function (response) {
				console.log($scope.editing);

				$scope.editing = false;

			});
	}


}]);