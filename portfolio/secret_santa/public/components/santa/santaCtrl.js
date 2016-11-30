var app = angular.module("SantaApp");

app.service("SantaService", ["$http", function ($http) {
	this.getPerson = function () {
		return $http.get("/api/user")
			.then(function (response) {
				return response.data;
			}, function (response) {
				console.log("Error " + response.status + ": " + response.statusText);
			});
	};

	this.savePerson = function (person) {
		return $http.post("/api/user", person)
			.then(function (response) {
				return response.data;
			}, function (response) {
				console.log("Error " + response.status + ": " + response.statusText);
			});
	};

	this.editPerson = function (updatedPerson) {
		return $http.put("/api/user/" + updatedPerson._id, updatedPerson)
			.then(function (response) {
				return response.data;
			})
	}
}]);

app.controller("SantaCtrl", ["$scope", "$http", "SantaService", function ($scope, $http, SantaService) {
	$scope.newPerson = {};
	$scope.Santa = [];
	//immediately invoked GET
	(function getSanta() {
		SantaService.getPerson()
			.then(function (person) {
				$scope.Santa = person;
			});
	})();

	$scope.addPerson = function (newPerson) {
		SantaService.savePerson(newPerson)
			.then(function (response) {
				console.log(response)
				$scope.Santa.push(response)
				$scope.newPerson = {};
			})
	}

	$scope.editPerson = function (updatedPerson, index) {
		SantaService.editPerson(updatedPerson)
			.then(function (response) {
				$scope.Santa[index].editing = false;
				$scope.Santa[index] = updatedPerson;
			})
	}
}]);