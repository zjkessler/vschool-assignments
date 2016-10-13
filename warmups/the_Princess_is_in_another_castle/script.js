var player = {
	name: "Zach",
	totalCoins: 10,
	status: "small",
	star: false,
	setName: function (namePicked) {
		if (namedPicked.toLowerCase() === "mario") {
			this.name = "Mario";
		} else if (namePicked.toLowerCase() === "luigi") {
			this.name = "Luigi"
		} else {
			alert("name needs to be Mario or Luigi");
		}
	},
	gotHit: function () {
		switch (player.status) {
		case "Powered Up":
			this.status = "Big";
			break;
		case "Big":
			this.status = "Small";
			break;
		default:
			this.status = "Dead";
			this.gameActive = false;
		}
	},
	getPowerup: function () {
		switch (player.status) {
		case "small":
			this.status = "Big";
			break;
		case "Big":
			this.status = "PoweredUp";
			break;
		}
	},

	gameActive: function () {},

	addCoin: function () {
		this.addCoin++;

	},
	print: function () {
		console.log(this.name);
		console.log(this.totalCoins);
		console.log(this.status);
		console.log(this.star);
	}
}

function random() {
	var roll = Math.floor(Math.random() * 3);
	return roll;
}

function doAction() {
	switch (random()) {
	case 0:
		player.gotHit();
		break;
	case 1:
		player.getPowerup();
		break;
	case 2:
		player.addCoin();
	}
}

for (var i = 0; i < 3; i++) {
	doAction();
}
player.print();