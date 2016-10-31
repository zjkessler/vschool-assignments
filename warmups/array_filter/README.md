Warmup - Array Filter
28 MAY 2015 on JavaScript, Week 8, Warmup, Programming Principles, Level 4
The Javascript Array Filter function is used to remove unwanted elements from an array. The filter function accepts a callback function. The callback function is invoked once with each element in the array. If the callback function returns a truthy value the element stays. If the callback function returns a falsey value the element is removed. The array filter function returns a new array that only contains the allowed elements.

For example, if I have an array of numbers and want to remove all numbers greater than 5, I would use the filter function like this:

var numericArray = [8, 3, 4, 32, 1, 9, 3, 5, 42, 56];

var filteredArray = numericArray.filter(function (element) {  
  if (element > 5)
    return false;
  else
    return true;
});

console.log(filteredArray);  
Your task is to write an array filter function that behaves the same way as the built-in one. You can define it like this:

Array.prototype.myFilter = function (callback) {  
  var array = this;
  // your code here
};
Then you would use the function like this:

var numericArray = [8, 3, 4, 32, 1, 9, 3, 5, 42, 56];

var noLargeNumbers =  numericArray.myFilter(function (element) {  
  return element <= 5;
});

console.log(noLargeNumbers);  
