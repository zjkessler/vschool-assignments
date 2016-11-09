var app = angular.module("myApp", []);

app.controller("myCtrl", ["$scope", "MyService", function ($scope, MyService) {

		MyService.getBountyInfo()
			.then(function (bounty) {
				$scope.bounties = bounty;
			});

		$scope.deleteBounty = MyService.deleteBountyInfo()
			.then(function (response) {
				console.log(responfse);
			})
	}

]);