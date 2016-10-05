function sum(a, b) {
	console.log(a + b);
}

sum(4, 7);

function largest(a, b, c) {
	if (a < b && c < b) {
		console.log(b);
	} else if (a < c && b < c) {
		console.log(c);
	} else if (b < a && c < a) {
		console.log(a);
	}
}

function oddEven(num) {
	if (num % 2 === 0) {
		console.log("Even");
	} else {
		console.log("odd");
	}
}

function stringCut(phrase) {
		if (phrase.length <= 20) {
		console.log(phrase + " " + phrase);
	} else if (phrase.length > 20) {
		console.log(phrase.substr(0, (phrase.length/2)));
	}
}