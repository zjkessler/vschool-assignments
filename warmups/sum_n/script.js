//Write a program that finds the sum of all the even squares from 1 to _n_

function squareSum(n) {
	var total = 0;
	for (var i = 1; i <= n; i++) {
		if ((i * i) % 2 === 0) {
			total += (i * i);
		}
	}
	console.log(total);
}

squareSum(5);