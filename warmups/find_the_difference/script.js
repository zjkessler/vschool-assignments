//Create a function that takes two or more arrays and returns an array of the items that are unique.
//
//Given two sets (for example set A = [1, 2, 3, 7, 9, “Belly”, 20] and set B = [2, 3, 4, 8, 10, “jelly”]), find the set of elements which are in one of the two sets, but not in both.
//
//The function should return an array of all the unique items.
//
//If you complete this, do the extra credit. 
//Extra Credit: Make it so that the function can accept any number of arrays, or an array of arrays, not just two.
A = [1, 2, 3, 7, 9, "Belly", 20];
B = [2, 3, 4, 8, 10, "jelly"];

function findDiff(arrA, arrB) {

	var combineArray = arrA.concat(arrB);

	for (var i = 0; i < combineArray.length; i++) {
		for (var j = 0; j < combineArray; j++) {
			if (combineArray[i] === combineArray[j]) {
				console.log("you made it");
				combineArray.splice(i, 1);
				combineArray.splice(j - 1, 1);
				return combineArray;
			}
		}
	}
	console.log(combineArray);
}

findDiff(A, B);