//var a = prompt("Enter a Number!");
//var b = prompt("Enter another Number!");
//var numberdisp = document.getElementById("lesser");
//var monkeyDisp = document.getElementById("monkey");
//
//
//
//var myNumber = function (a, b) {
//	if (a < b) {
//		return a + " is the lesser";
//	} else if (a === b) {
//		return a + " and " + b + " are equal!";
//	} else {
//		return b + " is the lesser!";
//	}
//}
//numberdisp.innerHTML = myNumber(a, b);
//
//
//
//var aSmile = prompt("Is monkey A Smiling?");
//var bSmile = prompt("Is monkey B Smiling?");
//
//var monkeysTrouble = function (aSmile, bSmile) {
//	if (aSmile && bSmile || !aSmile && !bSmile) {
//		return "We are in Trouble";
//	} else {
//		return "We are okay";
//	}
//}
//monkeyDisp.innerHTML = monkeysTrouble(aSmile, bSmile);


var dateDisp = document.getElementById("date");
var date = Date();
var time = date.getHours;

var greeting = function (time) {
	if (time > 18) {
		return "Good Evening";
	} else if (time > 12) {
		return "Good Afternoon";
	} else {
		return "Good Morning";
	}
}

dateDisp.innerHTML = greeting(time);