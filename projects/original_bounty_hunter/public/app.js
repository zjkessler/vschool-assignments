var app = angular.module("myApp", []);

app.controller("myCtrl", ["$scope", "MyService", function ($scope, MyService) {

	MyService.getBountyInfo()
		.then(function (bounty) {
			$scope.bounties = bounty;
		});

	$scope.addBounty = function () {
		MyService.postBountyInfo($scope.newBounty)
			.then(function (savedBounty) {
				$scope.bounties.push(savedBounty);
				$scope.newBounty = {};
			})
	};

	$scope.editBounty = function (updatedBounty, index) {
		MyService.putBountyInfo(updatedBounty)
			.then(function (savedBounty) {
				savedBounty.editing = false;
				$scope.bounties[index] = savedBounty;
			})
	}

	$scope.deleteBounty = function (bountyId, index) {
		MyService.deleteBountyInfo(bountyId)
			.then(function (deletedBounty) {
				$scope.bounties.splice(index, 1);
				console.log(deletedBounty);
			})
	}

	
		$scope.newBounty = {};
	


	}]);