//Create two parties (Create a Javascript constructor function and use the new keyword to instantiate the parties)
var Party = function (name) {
	this.name = name;
	this.pop = 1000000;
};

//Each party has a name ("Penguins" and "Communists" - or whatever you want)
var party1 = new Party("Penguins");
var party2 = new Party("Communists");

var homeTeam;
var awayTeam;
//Each party has a starting population of 1,000,000

//Flip a coin (random number between 1 and 2) to see which party attacks first
function coinFlip() {
	var flip = Math.floor(Math.random() * 2);
	if (flip === 0) {

		homeTeam = party1;
		awayTeam = party2;
	} else {

		homeTeam = party2;
		awayTeam = party1;
	}
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
//Create a function called sendNuke(party, onHit, onMiss) where:
//the first parameter party is the Javascript object of the party that will be attacked
//the second parameter onHit is a callback function that will be called if the attack is successful
//the third parameter onMiss is a callback function that will be called if the attack is unsuccessful
function sendNuke(party, onHit, onMiss) {
	var flip = Math.floor(Math.random() * 4);
	if (flip === 0) {
		onHit(party);
	} else {
		onMiss(party);
	}
}

//the onHit and onMiss functions each take one parameter of type party (just forwarding the party you already passed into sendNuke)
function onHit(party) {
	var hit = getRandomInt(50000, 100000);
	if (party === homeTeam) {
		awayTeam.pop = awayTeam.pop - hit;
		if (awayTeam.pop < 0) {
			awayTeam.pop = 0;
		}
		console.log("\n\t The " + homeTeam.name + "' Nuke hit a city, killing " + hit + " and reducing the " + awayTeam.name + "s' population to " + awayTeam.pop + "!");
	}
	if (party === awayTeam) {
		homeTeam.pop = homeTeam.pop - hit;
		if (homeTeam.pop < 0) {
			homeTeam.pop = 0;
		}
		console.log("\n\t The " + awayTeam.name + "' Nuke hit a city, killing " + hit + " and reducing the " + homeTeam.name + "' population to " + homeTeam.pop + "!");
	}
}

function onMiss(party) {

	if (party === homeTeam) {
		console.log("\n\t The " + homeTeam.name + "' Nuke missed and fell into the ocean!");
	}
	if (party === awayTeam) {
		console.log("\n\t The " + awayTeam.name + "' Nuke missed and fell into the ocean!");
	}
}

coinFlip();

while (party1.pop > 0 && party2.pop > 0) {
	sendNuke(homeTeam, onHit, onMiss);
	sendNuke(awayTeam, onHit, onMiss);
}
//Print messages in the callbacks that are appropriate - e.g. if the attack missed then it would log "The Penguins' nuke missed the Communists and instead landed in the ocean" or something along those lines
//A random algorithm will be used to determine if the attack is a miss or a hit (this can happen in the sendNuke function
//If an attack is successful initiate a random damage amount
//After an attack is completed (or missed) the opposing party will initiate an attack.
//This process will repeat until one of the parties reaches a 0 population