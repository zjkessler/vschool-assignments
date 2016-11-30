stock_prices_yesterday = [10, 7, 5, 8, 11, 9]

function get_max_profit(arr) {

	var low = arr[0];
	var high = arr[0];
	var start = 0

	for (var i = 0; i < arr.length; i++) {
		if (low > arr[i + 1]) {
			low = arr[i + 1];
			start = i + 1;

		}
	}

	for (var i = start; i < arr.length; i++) {
		if (high < arr[i + 1]) {
			high = arr[i + 1];
		}
	}
	console.log(`a buy of $${low} with sell at $${high} for a profit of $${high-low} per share `)
}

get_max_profit(stock_prices_yesterday);
//# returns 6(buying
//	for $5 and selling
//	for $11)