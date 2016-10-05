function add() {
	var num1 = parseInt(document.getElementById("addition1").value);
	var num2 = parseInt(document.getElementById("addition2").value);

	var answer = num1 + num2;
	var dispAnswer = document.getElementById("addAnswer");

	var el = document.createElement("P");
	el.innerHTML = answer;
	var divs = document.getElementsByTagName("div");
	divs[0].appendChild(el);

}

function sub() {
	var num1 = parseInt(document.getElementById("subtract1").value);
	var num2 = parseInt(document.getElementById("subtract2").value);

	var answer = num1 - num2;
	var dispAnswer = document.getElementById("subAnswer");
	var el = document.createElement("P");

	el.innerHTML = answer;
	var divs = document.getElementsByTagName("div");
	divs[1].appendChild(el);
}

function multi() {
	var num1 = parseInt(document.getElementById("multiply1").value);
	var num2 = parseInt(document.getElementById("multiply2").value);

	var answer = num1 * num2;
	var dispAnswer = document.getElementById("multiAnswer");

	var el = document.createElement("P");
	el.innerHTML = answer;
	var divs = document.getElementsByTagName("div");
	divs[2].appendChild(el);
}

function cleared() {
	document.getElementById("addition1").value = "";
	document.getElementById("addition2").value = "";
	document.getElementById("subtract1").value = "";
	document.getElementById("subtract2").value = "";
	document.getElementById("multiply1").value = "";
	document.getElementById("multiply2").value = "";

}