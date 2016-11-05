var readline = require("readline-sync");
var cor1 = '';
var cor2 = '';
var grid = require("./grid")
var hits = 0;


function hitOrMiss() {


	cor1 = parseInt(readline.question("Please enter 1st Coordinate: "));
	cor2 = parseInt(readline.question("Please enter 2nd Coordinate: "));
	var cords = grid[cor1][cor2];
	console.log(cor1);
	console.log(cor2);

	if (cords.ship === true && cords.hits === false) {
		cords.hit = true;
		hits++;
		cords.dispUpdate();
		console.log(cords);
		console.log("Hits: " + hits);
	} else {
		cords.dispUpdate();
		console.log(cords);
		console.log("Hits: " + hits);
	}
}

//while (hits < 3) {
//	hitOrMiss();
//}

//Using the readline-sync library that you have already used, you must ask the user for the first coordinate and store that in a variable, and then ask for the second coordinate and store that in a variable as well. You can also make it simpler by having the user enter both coordinates at once with a comma separator (0,1) and then parse the variables.
//
//Since your grid is a 10 X 10 grid, the possible coordinate options go from 0,0 to 9,9.
//
//If there is a ship at the coordinates that the user entered tell the user they had a hit. Otherwise, tell them they missed.
//
//Update the object in the coordinate position accordingly. Then allow them to make another guess.
//
//If the user hits 3 different ships tell them that they have won the game and then reset the game.

//Extra Credit:
//
//For extra practice, make the game more robust.
//
//Make the experience more visual for a user. After every attack from the user, print a grid that only shows the display property of the Location object. You can use the "\n" character put each array on its own line. It might look similar to this:
//     O O O O O O O O O O
//     O X O O O O O O O O
//     O X O M M O O O O O
//     O O O O O O O O O O
//     O O O O O O X O O O
//     O O O O O O O O O O
//If the user enters coordinates that have already been entered, tell them so.
//When you generate your grid, if by chance there are not 3 total ships (this could happen with our current code), re-generate the grid until there are at least 3 ships.
//Super duper above-and-beyond points:
//
//Generate ships that can be between 1 and 5 grid units in length. Keep in mind that ships cannot go off the grid.
//
//Keep in mind that a ship can take as many hits as it is long (so a ship that is 5 long takes 5 hits to destroy).