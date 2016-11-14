var app = angular.module("myApp");

app.service("MyService", ["$http", function ($http) {

	this.getBountyInfo = function () {
		var bounty = {};
		return $http.get("/bounties")
			.then(function (response) {
				return response.data;
			});
	}

	this.putBountyInfo = function (updatedBounty) {
		return $http.put("/bounties/" + updatedBounty._id, updatedBounty)
			.then(function (response) {
				console.log("response ", response);
				return response.data;
			});
	}
	
	this.postBountyInfo = function (newBounty) {
		$http.post("/bounties", newBounty)
			.then(function (response) {
				return response.data;
			});
	}

	this.deleteBountyInfo = function (bountyId) {
		return $http.delete("/bounties/" + bountyId)
			.then(function (response) {
				return response.data
			});
	}

}])