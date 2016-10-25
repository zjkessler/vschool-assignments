var app = angular.module("myApp", []);

app.controller("myCtrl", ["$scope", "$http", function ($scope, $http) {
	$scope.sentence = "";
	var config = {

		headers: {
			'X-Mashape-Key': 'ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm'
		}
	};
	$scope.translate = function () {
		$http.get("https://yoda.p.mashape.com/yoda?sentence=" + $scope.sentence, config)
			.then(function (response) {
				$scope.trlated = response.data;
			});
	};

}]);