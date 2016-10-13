Write a function called antiCaps which accepts a string and returns a string. The purpose of the function is to invert the capitalization of each letter in a string. For example:

antiCaps('Hello') // hELLO  
antiCaps('racEcar') // RACeCAR  
antiCaps('bAnAnA') // BaNaNa  
Here is a helper function that will return true if the letter is uppercase, and false if the letter is lowercase:

function isCaps(letter) {  
  return letter === letter.toUpperCase();
}