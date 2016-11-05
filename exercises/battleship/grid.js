//Part 2 - The Grid
//You are going to code a 2-Dimensional coordinate/point grid system, also known in math as a matrix. Grid systems are used in many applications such as any type of Match-3 game like Candy Crush, or even on your operating system’s desktop (i.e. when you arrange icons and they all line up). Every point on the grid has an X and Y coordinate which makes up the “point”.
//
//Your grid must have 100 points/coordinates, meaning there are 10 columns and 10 rows.
//
//If I were to make a 3 X 3 grid by hand, it might look like this:
//
//var grid = [  
//  [1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]
//]
//console.log(grid[1][1]) //Prints 5  
//You won't be creating your grid by hand, however. Creating your grid will require a for loop nested inside of a for loop. If you want some extra practice before starting this project you could review the Forception warmup.
//
//Your grid will be different from the above grid in another way, too. Instead of pushing numbers to your grid, you'll need to instantiate a new Location object and push that object to the grid.
//
//Once you've created the grid, you should log it to the console to make sure you're getting one array with 10 arrays, each item in the array being a Location object, where about 1 in 5 of the objects have true for the ship property.
//
//Don’t be too worried by the anticipated complexity of this problem, this grid could be written in about 12 lines of code!
var location = require("./location");

function makeBoard() {
	var finalBoard = [];
	for (var i = 0; i < 10; i++) {
		var row = [];
		for (var j = 0; j <= 10; j++) {

			row.push(location)

		}
		finalBoard.push(row);
	}
	console.log(finalBoard);
	return finalBoard;
}

function displayBoard(board) {
	var displayedBoard = [];
	for (var i = 0; i < 10; i++) {
		var row = "";
		for (var j = 0; j <= 10; j++) {
			row += board[i][j].display + "  ";
		}
		row += "/n"
		displayedBoard += row;
	}
	console.log(displayedBoard);
}

module.exports = {
	makeBoard: makeBoard,
	displayBoard: displayBoard
}