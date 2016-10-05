//create an enemy constructor
//type hit points & defense

function Enemy() {
	this.type = chooseEnemy();
	this.hp = setHP(this.type);
	this.defense = this.hp * 3;
}

//choose enemy type function
//randomly selects enemy type

function chooseEnemy() {
	var enemyArr = ["Ancient Dragon", "Prowler", "Mighty Grunt"];
	var random = getRandomInt(0, 2)
	return enemyArr[random]
}

//hit points generated randomly based on type and returns a 

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setHP(type) {

	if (type == "Ancient Dragon") {
		return getRandomInt(80, 100);
	} else if (type == "Prowler") {
		return getRandomInt(50, 79);
	} else if (type == "Mighty Grunt") {
		return getRandomInt(20, 49);
	}
}

var enemies = [];

for (var i = 0; i < 100; i++) {
	enemies.push(new Enemy());
}
console.log(enemies);