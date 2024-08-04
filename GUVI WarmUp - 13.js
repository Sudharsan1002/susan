/* Write a function called "isEven". "isEven" Should return whether it is even or not. Return -1 for invalid input. */

function isEven(num) {
	///Your code Starts here 
	
	if (num % 2 === 0) {
		return true
		
	} else if (num === String(num)) {
		return -1
	} else
		return false
	
	
	///Your code Ends here
}
console.log(isEven('6'))
/*
Lines For TestCase

isEven(12);
isEven(0);
isEven(11);
isEven("11h");
*/