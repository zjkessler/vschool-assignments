var app = angular.module("myApp");

app.controller("loveCtrl", ["$scope", function ($scope) {

	$scope.imageGallery = [
		{
			img: "http://cdn.theculturetrip.com/wp-content/uploads/2015/11/Oregon-%C2%A9-Josemaria-Toscano-Shutterstock.jpg"

		},
		{
			img: "http://oregon-stream-protection-coalition.com/wp-content/uploads/2014/12/website-image-1.jpg"
		},
		{
			img: "http://www.oregon.com/sites/default/files/greater-portland.jpg"
		},
		{
			img: "https://media-cdn.tripadvisor.com/media/photo-s/02/3f/3a/e3/the-famous-white-stag.jpg"
		},
		{
			img: "https://static1.squarespace.com/static/54b56e86e4b000383086ad6d/t/55a7c387e4b0e834ab4b2dcd/1437057930750/Oregon.jpg?format=1500w"
		},
	];
}]);