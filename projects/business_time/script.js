var center = new google.maps.LatLng(40.761594, -111.886159);

function initialize() {
	var mapProp = {
		center: center,
		zoom: 16,
		scrollwheel: true,
		draggable: true,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	var map = new google.maps.Map(document.getElementById("map"), mapProp);

	var marker = new google.maps.Marker({
		position: center,
	});

	marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);