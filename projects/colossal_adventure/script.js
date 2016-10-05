//- Console must greet player with a fun message

var ask = require("readline-sync");

var startGame = ask.question("Are you ready to go on an adventure? ")

if (startGame == "yes") {
	console.log("Alright Let's go take a walk beyond the wall because thats where adventures always start!");
} else {
	ask.question(startGame);
}


//- Walking:
//    - The console will ask the user to enter a "w" to walk
var walk = ["yes", "no"]
var walkling = ask.question("Start walking : " + walk[0] + " or " + walk[1]);
//    - Every time the player walks, a random algorithm will be run that determines if a wild enemy has appeared (A 1/3 or 1/4 chance of being attacked)


//- If a wild enemy appears:
//    - The enemy is random (can be chosen out of a minimum of 3 different enemy names)
function Enemy() {
	this.type = chooseEnemy();
	this.hp = setHP(this.type);
	this.attack = this.hp / 4;
}

//choose enemy type function
//randomly selects enemy type

function chooseEnemy() {
	var enemyArr = ["Snark", "Grumpkin", "White Walker"];
	var random = getRandomInt(0, 2)
	return enemyArr[random]
}

//hit points generated randomly based on type and returns a 

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setHP(type) {

	if (type == "White Walker") {
		return getRandomInt(80, 100);
	} else if (type == "Grumpkin") {
		return getRandomInt(35, 65);
	} else if (type == "Snark") {
		return getRandomInt(10, 30);
	}
}
var wildEnemy;

function callEnemy() {
	wildEnemy = new Enemy();
}

//    - The user can decide to attack or run


//    - If attacking, you will choose a random attack power between a min and max


//    - If running, you will choose a random number between 1 and 2 - meaning a 50% chance of escaping


//    - After the player attacks or runs the enemy attacks back for a random damage amount


//    - If the player kills the enemy you can give the Player some HP and a special item that is stored in the inventory


//    - If the enemy kills the player the console prints an cool death message and the game ends


//- Inventory
//    - When the player kills enemies, they are awarded with items
//    - If the user enters 'Print' in the console, the console will print the players name, HP, and each item in their inventory