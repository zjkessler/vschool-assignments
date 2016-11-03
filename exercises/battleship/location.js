//You'll need to create a Location constructor. When it comes time to make the grid, you'll make an array of arrays (one array with 10 arrays inside), and the inner arrays will contain 10 instances of a Location object.
//
//In a separate JavaScript file, Create a Javascript Constructor called Location. It must have the following properties:
//
//ship: Boolean - Is there a ship at this location, yes or no?
//
//hit: Boolean - Has this location been guessed already? (Whether or not there's a ship present.) If so, was it a hit (true) or a miss (false)?
//
//display: String - How should this location look on a printed board (in the extra credit, if you decide to do it)? This could be an "X" for "hit" or "M" for "miss", for example.
//
//The isShip boolean should be randomly chosen to be true about 1 in every 5 locations that gets instantiated (created) from this constructor. If your random code generates a true, make sure to mark your isShip boolean as true in your object.
//
//Hint: check out this Stack Overflow post for how to get a random integer in a specified range.
var Location = function () {
	this.ship = isShip();
	this.hit = false;
	this.display = "~";
	this.guess = false;
	this.dispUpdate = function () {
		this.guess = true;
		if (this.guess === true && this.ship === false) {
			this.display = "M"
		}
		if (this.guess === true && this.ship === true) {
			this.display = "X"
		}
	}

}


function isShip() {
	var random = Math.floor(Math.random() * (5 - 1) + 1);
	console.log(random)
	if (random === 4) {
		return true;
	} else {
		return false
	}
}

function shipDisp() {
	if (this.ship === true) {
		return "O"
	} else {
		return "."
	}
	if (this.hit === true) {
		return "X"
	}

}


console.log(new Location);
module.exports = new Location;