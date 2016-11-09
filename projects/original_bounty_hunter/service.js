var app = angular.module("myApp");

app.service("MyService", ["$http", function ($http) {

	var baseURL = "http://localhost:8000/bounties";

	this.getBountyInfo = function () {
		var bounty = {};
		return $http.get(baseURL)
			.then(function (response) {
				//				bounty.name = response.data.firstName + " " + response.data.lastName;
				//				bounty.alive = response.data.living;
				//				bounty.bountyAmount = response.data.bountyAmount;
				//				bounty.afill = response.data.type;
				return response.data


			});

	}

	this.postBountyInfo = function () {

	}

	this.putBountyInfo = function () {

	}

	this.deleteBountyInfo = function (index) {
		return $http.delete(baseURL + "/" + index)
			.then(function (response) {

			});
	}


}])