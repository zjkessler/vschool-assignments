//Return the sum of the numbers in the array, except ignore sections of numbers starting with a 6 and extending to the next 7 (every 6 will be followed by at least one 7). Return 0 for no numbers.

function sum67(array) {

	var six = array.indexOf(6);
	var seven = array.indexOf(7);

	if (six > 0) {
		var minSeven = (seven + 1) - six;
		array.splice(six, minSeven);
	}

	var sum = 0;
	for (var i = 0; i < array.length; i++) {
		sum += array[i];
	}
	console.log(sum)
}




console.log(sum67([1, 2, 2])) //→ 5)
console.log(sum67([1, 2, 2, 6, 99, 99, 7])) // → 5)
console.log(sum67([1, 1, 6, 7, 2])) // → 4)