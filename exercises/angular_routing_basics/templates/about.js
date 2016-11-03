var app = angular.module("myApp");

app.controller("aboutCtrl", ["$scope", function ($scope) {

	$scope.art1 = "Oregon is a state in the Pacific Northwest region of the United States. Oregon is bordered on the west by the Pacific Ocean, on the north by Washington, on the south by California, on the east by Idaho, and on the southeast by Nevada. The Columbia River delineates much of Oregon's northern boundary, and the Snake River delineates much of the eastern boundary. The parallel 42° north delineates the southern boundary with California and Nevada. It is one of only three states of the contiguous United States to have a coastline on the Pacific Ocean, and the proximity to the ocean heavily influences the state's mild winter climate, despite the latitude.";

	$scope.art2 = "Oregon was inhabited by many indigenous tribes before Western traders, explorers, and settlers arrived. An autonomous government was formed in the Oregon Country in 1843, the Oregon Territory was created in 1848, and Oregon became the 33rd state on February 14, 1859. Today, at 98,000 square miles (255,000 km²), Oregon is the ninth largest and, with a population of 4 million, 27th most populous U.S. state. The capital of Oregon is Salem, the second most populous of its cities, with 164,549 residents (2015 estimate). Portland is Oregon's most populous city, with 632,309 residents (2015 estimate), and ranks as the 26th most populous city in the United States. Portland's metro population of 2,389,228 (2015 estimate) ranks the 23rd largest metro in the nation. The Willamette Valley in western Oregon is the state's most densely populated area, home to eight of the ten most populous cities.";

	$scope.art3 = "Oregon's landscape is diverse, with a windswept Pacific coastline; a volcano-studded Cascade Range; abundant bodies of water in and west of the Cascades; dense evergreen, mixed, and deciduous forests at lower elevations; and a high desert sprawling across much of its east all the way to the Great Basin. The tall conifers, mainly Douglas fir, along Oregon's rainy west coast contrast with the lighter-timbered and fire-prone pine and juniper forests covering portions to the east. Abundant alders in the west fix nitrogen for the conifers. Stretching east from central Oregon are semi-arid shrublands, prairies, deserts, steppes, and meadows. At 11,249 feet (3,429 m), Mount Hood is the state's highest point. Oregon's only national park, Crater Lake National Park, comprises the caldera surrounding Crater Lake, the deepest lake in the United States.";


}]);

$(document).ready(function () {
	$('[data-toggle="popover"]').popover();
});