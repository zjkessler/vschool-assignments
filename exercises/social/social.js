var roadBiker = {
	name: "Ryan",
	age: 23,
		bikeBrand: function() {
				console.log("Orbea");
			},
	favoriteRides: ["Wasatch Drive", "Legacy Drive"],
	roadBikingFriends: [
		{
			name: "Sarah",
			age: 31,
			bikeBrand: function() {
				console.log("Trek");
			},
			favoriteRides: [
				{
					rideName: "Emigration - Little Mountain",
					category: 3
                },

            ]
        },
		{
			name: "Steven",
			age: 26,
			bikeBrand: function() {
				console.log("Specalized");
			},
			favoriteRides: [
				{
					rideName: "Emigration - Big Mountain",
					category: 2
                },
				{
					rideName: "Emigration - Little Mountain",
					category: 3
                },
            ]
        },
		{
			name: "Tom",
            age: 42,
            bikeBrand: function() {
				console.log("Pinarello");
			},
			favoriteRide: [
                {
                    rideName: "Legacy Drive",
                    category: 4
                },
            ]
		}
    ]
}