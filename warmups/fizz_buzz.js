//on multiples of three, fizz

//on mupltiples of five, buzz

//
function fizzBuzz(num) {

	for (var i = 1; i < num; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			console.log(i + " : " + "fizz buzz");
		} else if (i % 5 === 0) {
			console.log(i + " : " + "buzz");
		} else if (i % 3 === 0) {
			console.log(i + " : " + "fizz");
		} else if (i % 3 != 0 && i % 5 != 0) {
			console.log(i);
		}

	}
}

fizzBuzz(400);