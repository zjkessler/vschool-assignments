var ask = require("readline-sync");

//Using the NodeJS package readline-sync, create an interactive program that asks you some personal information (name, age, favorite color, etc.) and reports back to you what you entered. Make sure to include the following string manipulations:
//

//- Report back the number of characters in a given input
//- Concatenate (add) two separate strings together
//- Given a long message (more than twenty letters), return only the last half of the message
//- Using the same long message (but without making the user type it in again), have your program print it to the terminal for the user to read again, but allow the user to tell your program where to begin typing from (i.e., which index to start from).
//
console.log("Hi! I'm a computer! Tell me a little about yourself...");
var fName = ask.question("What's your first name? ");
var lName = ask.question("what is your last name? ");
var age = ask.question("How old are you? ");
var color = ask.question("What is your favorite color: ")
fName += " ";

console.log("Ok. I know your name is " + fName.concat(lName) + " and you are " + age + " years old.");

console.log(" Just so you know I HATE " + color.toUpperCase() + " because it is " + color.length + " letters long!")

var bGround = ask.question("Tell me a few words about yourself... ");

if (bGround.length > 20) {
	var bGround2 = bGround.slice(Math.floor(bGround.length / 2));
	console.log("Here is the last half of that string : " + bGround2);
}


var bGroundShort = ask.question("Where would you like to me start reapting you're information?  Please choose a number between 0-" + bGround.length +": ");
console.log("Here you go: ");
console.log(bGround.substring(bGroundShort, bGround.length));
