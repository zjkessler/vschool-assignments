//Given an array of ints, return True if 6 appears as either the first or last element in the array. The array will be length 1 or more.

function first_last6(arr) {
	return (arr[0] === 6 || arr[arr.length - 1] === 6);
}

console.log(first_last6([1, 2, 6])); //→ True
console.log(first_last6([6, 1, 2, 3])); //→ True
console.log(first_last6([13, 6, 1, 2, 3])); // → False