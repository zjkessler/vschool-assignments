var gValue = document.getElementById("counter1").innerHTML;
var bValue = document.getElementById("counter2").innerHTML;
var cValue = document.getElementById("counter3").innerHTML;

function totalCost() {
	var total = (gValue * 5) + (bValue * 7) + (cValue * 11);
	document.getElementById("gtotal").innerHTML = total + " Coins";
}

totalCost();

function addGoomba() {
	gValue++;
	document.getElementById("counter1").innerHTML = gValue;
	totalCost();
	costGoomba();
}

function minusGoomba() {
	if (gValue > 0) {
		gValue--;
		document.getElementById("counter1").innerHTML = gValue;
		totalCost();
		costGoomba();
	}
}

function costGoomba() {
	total = gValue * 5;
	document.getElementById("cost1").innerHTML = "Cost: " + total + " Coins";
}

costGoomba();

function addBomb() {
	bValue++;
	document.getElementById("counter2").innerHTML = bValue;
	totalCost();
	costBomb();
}

function minusBomb() {
	if (bValue > 0) {
		bValue--;
		document.getElementById("counter2").innerHTML = bValue;
		totalCost();
		costBomb();
	}
}

function costBomb() {
	total = bValue * 5;
	document.getElementById("cost2").innerHTML = "Cost: " + total + " Coins";
}

costBomb();

function addCheep() {
	cValue++;
	document.getElementById("counter3").innerHTML = cValue;
	totalCost();
	costCheep();
}

function minusCheep() {
	if (cValue > 0) {
		cValue--;
		document.getElementById("counter3").innerHTML = cValue;
		totalCost();
		costCheep();
	}
}
function costCheep() {
	total = cValue * 5;
	document.getElementById("cost3").innerHTML = "Cost: " + total + " Coins";
}

costCheep();
