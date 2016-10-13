var gValue = $("#counter1").html();
var bValue = $("#counter2").html();
var cValue = $("#counter3").html();

function totalCost() {
	var total = (gValue * 5) + (bValue * 7) + (cValue * 11);
	$("#gtotal").html(total + " Coins");
}

totalCost();

function addGoomba() {
	gValue++;
	$("#counter1").html(gValue);
	totalCost();
	costGoomba();
}

function minusGoomba() {
	if (gValue > 0) {
		gValue--;
		$("#counter1").html(gValue);
		totalCost();
		costGoomba();
	}
}

function costGoomba() {
	total = gValue * 5;
	$("#cost1").html("Cost: " + total + " Coins");
}

costGoomba();

function addBomb() {
	bValue++;
	$("#counter2").html(bValue);
	totalCost();
	costBomb();
}

function minusBomb() {
	if (bValue > 0) {
		bValue--;
		$("#counter2").html(bValue);
		totalCost();
		costBomb();
	}
}

function costBomb() {
	total = bValue * 5;
	$("#cost2").html("Cost: " + total + " Coins");
}

costBomb();

function addCheep() {
	cValue++;
	$("#counter3").html(cValue);
	totalCost();
	costCheep();
}

function minusCheep() {
	if (cValue > 0) {
		cValue--;
		$("#counter3").html(cValue);
		totalCost();
		costCheep();
	}
}

function costCheep() {
	total = cValue * 5;
	$("#cost3").html("Cost: " + total + " Coins");
}

costCheep();

$("#goombaPlus").click(addGoomba).click(playAudio);
$("#goombaMinus").click(minusGoomba).click(playAudio);
$("#bombPlus").click(addBomb).click(playAudio);
$("#bombMinus").click(minusBomb).click(playAudio);
$("#cheepPlus").click(addCheep).click(playAudio);
$("#cheepMinus").click(minusCheep).click(playAudio);

function playAudio() {
	var audio = $("#coinSound")[0];
	audio.play();
}

$("#dark").click(darkMode);

function darkMode() {
	$("body, p, h2, h3").toggleClass("darkSetting");
}