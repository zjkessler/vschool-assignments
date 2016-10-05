var readline = require("readline-sync");
//var name = readline.question("What is your name?");
//
//for (var i = 0; i < name.length; i++) {
//	console.log(name[i]);
//}
//
//var alpha = readline.question("Enter a series of letters: ");
//var letter = readline.question("Enter a single letter: ");
//var index;
//
//for (var i = 0; i < alpha.length; i++) {
//	if (letter === alpha[i]) {
//		console.log("position = " + i);
//		index = i; 
//		break;
//	} 
//}
//if(letter !== alpha[i]) {
//	console.log("character not Found:(");
//}

//var num;
//
//while (num !== "42"){
//	num = readline.question("what is the meaning of life? ");
//}

var lowest;
var num;
for (var i = 0; i < 10; i++) {
	num = readline.question("enter a number: ");
	if (i === 0 || num < lowest) {
		lowest = num;
	}
}
console.log(lowest);