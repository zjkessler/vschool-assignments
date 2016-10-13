//- Console must greet player with a fun message

var ask = require("readline-sync");

var inventory = [];
var item1 = new Item("Potion", 25, "restores 25 HP to character");
var item2 = new Item("Whetstone",
	10, "increase attack power by 10");
var item3 = new Item("Philosopher Stone", 0, "a shiney rock, not sure what it's for...");
var attack = false;
var run = false;
var wildEnemy;
var player1 = {
	name: "",
	hp: 100,
	attack: [15, 25]
}
player1.name = ask.question("\n\tWhat is your name? ");


if (!ask.keyInYNStrict("\n\tAre you ready to range beyond the Wall, " + player1.name + "? ")) {
	process.exit();
}
console.log("\n\tAlright let's start our ranging! For the Watch!");

//- Walking:
//    - The console will ask the user to enter a "w" to walk

var walk = true //ask.question("Start walking? (enter w)")

var startWalking = ask.keyIn("\nEnter 'w' to start walking; ", {
	limit: ['w']
});
if (startWalking === 'w') {
	walking();
}

function walking() {
	while (walk) {
		if (chanceEnemyAppear() === 1) {
			walk = false;
			var wildEnemy = callEnemy();
			console.log("\nA " + wildEnemy.type + " appeared");
			attackOrRun();
		} else {
			contWalking();
		}
	}
}

function contWalking() {
	var keepWalking = ask.keyIn("\nEnter 'w' to continue walking: ");
	if (keepWalking === "w") {
		walk = true;
		walking();
	} else {
		process.exit();
	}
}

//    - Every time the player walks, a random algorithm will be run that determines if a wild enemy has appeared (A 1/3 or 1/4 chance of being attacked)

function chanceEnemyAppear() {
	var roll = Math.floor(Math.random() * 3);
	return roll;
}
//- If a wild enemy appears:
//    - The enemy is random (can be chosen out of a minimum of 3 different enemy names)

function Enemy() {
	this.type = chooseEnemy();
	this.hp = setHP(this.type);
	this.attack = [Math.floor(this.hp / 6), Math.floor(this.hp / 4)];
}

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

//choose enemy type function
var wildEnemy;

function callEnemy() {
	wildEnemy = new Enemy();
	return wildEnemy;
}

//    - The user can decide to attack or run


function attackOrRun() {
	var answer = ask.question("\n\tWhat do you want to do? \n\t\t1. Attack! \n\t\t2. Bravely Run Away! \n\t\t3. Menu\n\t\t4. Exit Game\n");
	if (answer == 1) {
		attack = true;
		run = false;
		console.log("\nYeahhaaaaa!");
		attacking();
	} else if (answer == 2) {
		attack = false;
		run = true;
		console.log("\nYou attempt to run away!");
		enemyAttack();
	} else if (answer == 3) {
		attack = false;
		run = false;
		menu();
	} else if (answer == 4) {
		process.exit();

	}
}

//    - If attacking, you will choose a random attack power between a min and max
function attacking() {
	console.log("\nYour HP: " + player1.hp);
	console.log(wildEnemy.type + "'s HP: " + wildEnemy.hp);
	youAttack();
	// open inventory

	//	exit game
}


//    - If running, you will choose a random number between 1 and 2 - meaning a 50% chance of escaping

function runAway() {
	var roll = Math.floor(Math.random() * 2);
	if (roll === 0) {
		console.log("\n\tYou escaped!");
		contWalking();
	} else {
		console.log("\n\tYou did not Escape!");
		attackOrRun();
	}
}
//    - After the playerattacks or runs the enemy attacks back for a random damage amount
function youAttack() {
	var damage = getRandomInt(player1.attack[1], player1.attack[1]);
	wildEnemy.hp = wildEnemy.hp - damage;
	console.log("\nYou hit for " + damage + " points of damage!");
	console.log("The " + wildEnemy.type + "'s HP: " + wildEnemy.hp);
	if (wildEnemy.hp > 0) {
		enemyAttack();
	} else if (wildEnemy.hp < 0) {
		youWin();
	}
}


function enemyAttack() {
	var damage = getRandomInt(wildEnemy.attack[0], wildEnemy.attack[1]);
	player1.hp = player1.hp - damage;
	console.log("\nThe " + wildEnemy.type + " caused " + damage + " points of damage!");
	console.log("Your HP: " + player1.hp);
	if (attack === true && player1.hp > 0) {
		//action menu
		attacking();
	} else if (run === true && player1.hp > 0) {
		runAway();
	} else if (player1.hp <= 0) {
		youLose();
	}
}
//    - If the player kills the enemy you can give the Player some HP and a special item that is stored in the inventory
function youWin() {
	console.log("\n\tCongratulations!\n\tYou slew a " + wildEnemy.type + "!!");
	randomItem();
	var answer = ask.question('\n\tWhat do you do? \n\t\t1. Keep walking \n\t\t2. Menu \n\t\t3. Exit Game\n');
	if (answer == 1) {
		walk = true;
		walking();
	} else if (answer == 2) {
		menu();
	} else if (answer == 3) {
		process.exit;
	}
}

//    - If the enemy kills the player the console prints an cool death message and the game ends
function youLose() {
	console.log("\n\tThe " + wildEnemy.type + " killed you! \n\t Now you will be doomed to roam the lands beyond the wall as a Wight.  \n\tTough luck hero.  \n\tWinter is Here.");
	console.log("\n\tGAME OVER!");
}
//- Inventory
//    - When the player kills enemies, they are awarded with items
//    - If the user enters 'Print' in the console, the console will print the players name, HP, and each item in their inventory

function Item(type, ab1, desc) {
	this.type = type;
	this.ability1 = ab1;
	this.descript = desc;
}



//adding items into inventory
function addItemToInventory(item) {
	if (inventory.length === 0) {
		inventory.push(item);
	} else {
		inventory.push(item);
	}
}

function lookForItem(item) {
	if (inventory.indexOf(item) === -1) {
		inventory.push(item);
		console.log("\n\tA " + item.type + " was added to Inventory!");
	} else if (inventory.indexOf(item) >= 0) {
		console.log("\n\tYou already have this item.");
	}
}


function randomItem() {
	var roll = chanceEnemyAppear();
	if (roll === 1) {
		console.log("\nThe " + wildEnemy.type + " dropped a " + item1.type);
		lookForItem(item1);
	} else if (roll === 2) {
		console.log("\nThe " + wildEnemy.type + " dropped a " + item2.type);
		lookForItem(item2);
	} else if (roll === 0) {
		console.log("\nThe " + wildEnemy.type + " dropped a " + item3.type);
		lookForItem(item3);
	}
}

function menu() {
	console.log("\n\tPlayer Name: " + player1.name + "\n\tHealth: " + player1.hp + "\n\tAttack Power: " + player1.attack[0] + "-" + player1.attack[1]);
	console.log("\nInventory: ");
	for (var i = 0; i < inventory.length; i++) {
		console.log(i + 1 + ". " + inventory[i].type);
	}
	var choice = ask.question("\n\tWhich Item do you want to use? \n\tEnter number or press 'w' to countinue walking:\n ");
	if (choice >= 1) {
		useItem(inventory[choice - 1]);
	} else if (choice === "w") {
		walk = true;
		walking();
	}
}

function useItem(item) {
	if (item === item1) {
		player1.hp += item1.ability1;
		console.log("\n\tYour health increased by " + item1.ability1 + "!");
		console.log("\n\tYou used a" + item1.type + "!");
		var n = inventory.indexOf(item);
		inventory.splice(n, 1)
		menu();
	}
	if (item === item2) {
		player1.attack[0] += item2.ability1;
		player1.attack[1] += item2.ability1;
		console.log("\n\tYou used a" + item2.type + "!");
		console.log("\n\tAttack power increased by " + item2.ability1 + "!");
		var n = inventory.indexOf(item);
		inventory.splice(n, 1)
		menu();
	}
	if (item === item3) {
		console.log("\n\tYou used a" + item3.type + "! \n\t It sparkles brightly in your hand!");
		menu();
	}
}