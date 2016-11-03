var readline = require('readline-sync');

var add = require("./add");
var subtract = require("./sub");
var multiply = require("./multi");
var divide = require("./divide");
//var expo = require("./exp0");


var operation = readline.question('Please enter your operation: ');
var number1 = readline.question('Please enter your 1st number: ');
var number2 = readline.question('Please enter your 2nd number: ');

function chooseOp(operation, num1, num2) {
	if (operation === '+') {
		add(parseInt(num1), parseInt(num2));
	} else if (operation === '-') {
		subtract(parseInt(num1), parseInt(num2));
	} else if (operation === '/') {
		divide.operation(parseInt(divide.num1 = num1), parseInt(divide.num2 = num2));
	} else if (operation === '*') {
		multiply(parseInt(num1), parseInt(num2));
	}
}

chooseOp(operation, number1, number2);