function Divide() {
	this.num1 = "";
	this.num2 = "";
	this.operation = function (num1, num2) {
		console.log(this.num1 / this.num2);
	}

}

module.exports = new Divide;