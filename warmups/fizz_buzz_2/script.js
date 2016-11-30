//Given a string str, if the string starts with "f" return "Fizz". If the string ends with "b" return "Buzz". If both the "f" and "b" conditions are true, return "FizzBuzz". In all other cases, return the string unchanged. (See also: FizzBuzz Code)
//


function fizzString(str) {
	if (str.charAt(0) == "f" && str.charAt(str.length - 1) == "b") {
		console.log("FizzBuzz")
	} else if (str.charAt(0) == "f") {
		console.log("Fizz")
	} else if (str.charAt(str.length - 1) == "b") {
		console.log("Buzz")
	}
}

fizzString("fig") // → "Fizz"
fizzString("dib") // → "Buzz"
fizzString("fib") // → "FizzBuzz"