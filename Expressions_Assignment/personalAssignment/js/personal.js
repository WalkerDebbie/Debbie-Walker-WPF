
/*
 Debbie Walker
Personal
 WPF 1411
 11/3/14
 */

//alert("Testing 1,2,3!");



//Let's go SCUBA diving!

//Yippee, you finally have a week of vacation! You have always wanted to go SCUBA diving with sharks
// and you have a once in a lifetime offer to go with Jacques-Yves Cousteau's son, Jean-Michael.
// What will your total dives cost you for the week?

//PEMDAS - Please excuse my dear aunt sally
//Parenthesis, Exponents, Multiply, Divide, Add, Subtract
// guide costs + air rental * frequency * days = x

// Declare variables:
var guide = parseFloat(prompt("Please enter the cost for a guided dive:"));//because the prompt turns the return into

//strings, I had to parseInt(numbers) and parseFloat(numbers with decimals) the prompt in order to convert the string to a number for the calculation.
var airRental = parseFloat(prompt("Please enter the cost for a tank of air:"));
var frequency = parseInt(prompt("Please enter how many dives you want to make a day:"));
var days = parseInt(prompt("Please enter how many days you plan to dive:"));
var totalCosts = (guide + airRental) * frequency * days;

//print the total cost for the week
console.log("Wow, $" + (totalCosts.toFixed(2)) + " is pretty cheap for a once in a lifetime \nopportunity to " +
" dive with Jean-Michael Cousteau. \nHope you have a great time!");

//THANK YOU VID!!!!!!!!!!