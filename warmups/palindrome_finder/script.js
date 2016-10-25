var strArray = [];
var revArray = [];

function isPalindrome(str) {
	//convert to array

	for (var i = 0; i < str.length; i++) {
		strArray.push(str[i]);
	}
	//	splice any special characters
	removeChar(strArray);

	//	reverse Array
	revArray = strArray.reverse();
	//	compare to original 
	if (strArray === revArray) {
		console.log("It's a Palindrome");
	} else {
		console.log("not a plaindrome")
	}
}

function removeChar(str) {
	var j = 0;
	var pattern = /[^a-zA-Z]/;
	while (j < str.length) {
		if (pattern.test(str[j])) {
			str.splice(j, 1);
		}
		j++;
	}
	console.log(strArray);
	strArray = str;
}

isPalindrome("Star Rats!"); // true  
isPalindrome("palindrome"); // false  
isPalindrome("I madam, I made radio! So I dared! Am I mad?? Am I?!"); // true



//function palindrome (str) {
//	var strStripped = str.toLowerCase().replace(/[^a-z]/gi, "");
//	strStripped === strStripped.split("").reverse().join("") ? console.log(true) : console.log(false);
//}