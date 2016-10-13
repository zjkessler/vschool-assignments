function noTeenSum(a, b, c) {
	var int1 = fixTeen(a);
	var int2 = fixTeen(b);
	var int3 = fixTeen(c);
	var answer = int1 + int2 + int3;
	console.log(answer);
}

function fixTeen(n) {
	if (n === 13 || n === 14 || n === 17 || n === 18 || n === 19) {
		n = 0;
		return n;
	} else {
		return n;
	}
}
noTeenSum(1, 2, 3);
noTeenSum(2, 13, 1);
noTeenSum(2, 1, 14);
noTeenSum(2, 15, 14);