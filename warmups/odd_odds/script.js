//Your function will take an array of numbers and return true if there are an odd number of odd numbers and return false if there are an even number of odd numbers.
//
//remember the % returns the remainder, so if you want to check if n is even, you say:
//
//if (n % 2 === 0)
//
//You can copy and paste the following to test your code.




//function oddOdds(numberArray) {
//	var oddArray = [];
//	//loop array to determine number of odd numbers
//	for (var i = 0; i < numberArray.length; i++) {
//		//push to a new array
//		if (numberArray[i] % 2 !== 0) {
//			oddArray.push(numberArray[i]);
//		}
//	}
//
//	if (oddArray % 2 !== 0) {
//		console.log(oddArray.length);
//	}
//	//check length of array to see if odd
//
//}

function oddOdds(numberArray) {}
var counter = 0;
for (var i = 0; i < numberArray.length; i++) {

}



oddOdds([1, 1, 3, 4]); // 3  
oddOdds([1, 1, 3, 4, 6, 9]); // 4  
oddOdds([3, 4, 4, 8, 1, 1, 3, 4, 5, 27]); // 6