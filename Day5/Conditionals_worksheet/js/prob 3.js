
/*
 Debbie Walker
 Conditionals Worksheet
 WPF 1411
 11/5/14 */

//Problem 3 | How much will your ticket cost?

//Declare variables:
var age = prompt("Please enter your age.");
var discountAge = (age <= 10 || age >= 55);


var time = prompt("Please enter the showtime.");
var matinee = (time < 2 || time > 5);


//Tenary the condition: (HAPPY DAY!!!!!!)
discount = (discountAge = true) || (matinee = true) ?
    console.log("You qualifies you for a discounted price of $7.00.") :
    console.log("Your ticket price is $12.00.");
