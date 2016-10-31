// The parameter weekday is true if it is a weekday,
// and the parameter vacation is true if we are on
// vacation. We sleep in if it is not a weekday or
// we're on vacation. Return true if we sleep in.

function sleepIn(weekday, vacation) {
	if (weekday === true && vacation === false) {
		console.log(false);
	} else if ((weekday === false && vacation === false) || (weekday === false && vacation === true)) {
		console.log(true);
	}

}

sleepIn(false, false) // true
sleepIn(true, false) // false
sleepIn(false, true) // true