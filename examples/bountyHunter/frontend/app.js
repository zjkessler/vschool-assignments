angular.module("BountyApp", [])
    .service("HttpService", function ($http) {
        this.getAllBounties = function () {
            return $http.get("/bounties")
                .then(function (response) {
                    return response.data;
                })
        }

        this.updateBounty = function (updatedBounty) {
            return $http.put("/bounties/" + updatedBounty.id, updatedBounty)
                .then(function (response) {
                    console.log("response ", response);
                    return response.data;
                })
        }

        this.addBounty = function (newBountyObj) {
            return $http.post("/bounties", newBountyObj)
                .then(function (response) {
                    console.log("response ", response);
                    return response.data;
                });
        }

        this.deleteBounty = function (bountyId) {
            return $http.delete("/bounties/" + bountyId)
                .then(function (response) {
                    return response.data;
                });
        }
    })

.controller("MainController", ["$scope", "HttpService", function ($scope, HttpService) {
    // Get all bounties
    // Get all bounties
    $scope.getAllBounties = function () {

        HttpService.getAllBounties()
            .then(function (bounties) {
                $scope.bounties = bounties;
            })
    }

    // Iniit Controller
    // Iniit Controller
    function init() {
        $scope.newBounty = {};
        $scope.getAllBounties();
    }
    init();


    // Get all bounties
    $scope.updateBounty = function (updatedBounty, index) {

        HttpService.updateBounty(updatedBounty)
            .then(function (savedBounty) {
                console.log("savedBounty ", savedBounty);
                savedBounty.isBeingEdited = false;
                $scope.bounties[index] = savedBounty;
                console.log("$scope.bounties[index] ", $scope.bounties[index]);
            })
    }

    // Delete a bounty 
    $scope.deleteBounty = function (bountyId, index) {
        HttpService.deleteBounty(bountyId)
            .then(function (deletedBounty) {
                $scope.bounties.splice(index, 1);
                console.log(deletedBounty);
            })
    }

    $scope.addNewBounty = function () {
        if ($scope.newBounty.firstName && $scope.newBounty.lastName && $scope.newBounty.amount) {
            HttpService.addBounty($scope.newBounty)
                .then(function (savedBounty) {
                    $scope.bounties.push(savedBounty);
                    $scope.newBounty = {};
                })
        }
    }

}]);