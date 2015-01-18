/*
Debbie Walker
Day 4 Prompts
WPF 1411
11/3/14
 */

//alert("Testing 1,2,3!");

//Ask user for input

//prompt() - ask the user to type something in

/*
var yearBorn = 1965;

prompt("Enter your year of birth.");
console.log(yearBorn);

var age = 2014 - yearBorn;
console.log("You are " + age + " years old.");
*/

//Calculate the are of a rectangle area = length * width

var length = prompt("We are going to calculate the area of" +
" a rectangle.  \nPlease enter length:");
var width = prompt("Please enter width:");

//calculate the actual area
var area = length * width;

//console the area
console.log("The area of your rectangle is " + area + ".");

console.log("The area of your rectangle is the width of " + width + " and the length of " +  length + " for an " + area + " area.");

//create a results variable and then console log that
var results = ("The area of your rectangle is the width of " + width + " and the length of " +  length + " for an " + area + " area.");

console.log(results);