/**
 * Created by debbiewalker on 10/31/14.
 */

alert("Debbie Walker, WPF 1, Day 3 Expressions");

// single-line comments
/* multi-line comment */

//alert("Hello World!");
//console.log("This is the console, can you see it?"); - to show variables and code.

//Instantiation, AKA how we use it: syntax var courseName = value;
// - var declares a variable (only once)
// - courseName (camel case, special name, does not start with number) unique identifier
// - value = data types (number, strings, booleans, arrays) if left blank = null

// Declare a variable
// Use the keyword of var
// var whatEver1; //Declaration
// Set the value of the variable
// whatEver1 = 42; // Definition

//Simple Math
//How old we are
//2014-year we were born
// var yearBorn = 1965;
// CONTAIN THE RESULT
// var myAge = 2014 - yearBorn;
//Tell the user how old
//console.log(myAge);
//If date has not occurred yet, do A or else do B
//console.log(2014 - yearBorn - 1);

//Math (+, - , *,  /)
//Find the area of a triangle
//Base * Height /2
//var base = 4;
//var height = 5;
//var areaTriangle = base * height /2;
//console.log(areaTriangle);

//PEMDAS - Please excuse my dear aunt sally
//Parenthesis, Exponents, Multiply, Divide, Add, Subtract
//Find quiz averages
//var quiz1 = 87;
//var quiz2 = 100;
//var quiz3 = 70;
//Average quiz by adding up and dividing by (how many quiz)
//var average = (quiz 1 + quiz2 + quiz3)/3;
//A rookie mistake is to WAY overuse parenthesis!

//Calculate the perimeter of a rectangle
//2* width + 2* length
//var width = 6;
//var length = 8;
//var perimeterRect = 2*width + 2*length;
//console.log(perimeterRect);


//modulo % is the remainder left over (mostly used in programming to figure out if it's odd or even - if it's even
// it's divisable by two with a 0 remainder // odd numbers have remainders)
//Find out if its odd or even
//var evenOrOdd = 67%2;
//console.log(evenOrOdd);

//Assignment operators (we mostly use = )
/*
= sign assigns the value to the variable
++ signs assigns adds 1 to to value of the variable
-- "           " decreases by 1 "                  "
+= Adds the number to the value of the variable
-+ Subtracts the number of the value to the variable
/= Divides the value of the variable by the number
*= Multiples the value of the variable by the number
//var x -1;
//x++; //
//x--;
//x+=2;
//x-=1;
//x/=2;
//x*=8;
//console.log(x);
*/

//var kermit = "light green";
//var frogName = "Kermit";
//var frogName = Kermit; is now a variable, not a text string anymore.

// \n is a new line character (similar to the return key)
//

//CONCATENATION - Combine strings together
//var firstName = "Kermit";
//var lastName = "The Frog";
//Concatenate these two variables into one variable...
//var fullName = firstName + " " + lastName;
//console.log("fullName");
//var f = 9;
//var g = "9";
//var i = 9;
//based on order of operations -

//TRACE is the result shown in the browser

//___________________________________________________


// Lab Assignment | Creating Expressions

// Problem 1 PIZZA | Part 1
// Problem: Figure out how many slices of pizza each person will receive?

//DECLARE variable(s) and defined them at the same time:
var slices = 18;
var people = 6;
var pizzas = 4;

//DEFINE the value (equation) of "person" using syntax, slices * pizza / people
var person = (slices * pizzas /people);

//Result format, this is what will show up in the browser document post.
console.log("Each person will receive " + person + " slices of pizza.");

// Problem 1 PIZZA| Part 2
//Problem: How much left over pizza will be left to feed Sparky the dog, \
// if all the pizza slice where whole?
//Result variable, equation: remainder of slices = .3333333 * people (6) = x
var leftOver= (slices * pizzas %people);//Modulus is used to calculate the remainder
// (so slices * pizzas = x, remainder of x * people % remainder)
//TRACE, this is what will show up in the browser document post.
console.log("Sparky received " + leftOver + " slice of pizza.");


// Problem 2 BUDGET
// Problem: Average the annual grocery budget using the last 5 weeks.
// Declaration:
var total = 770.00;
var average = total / 5;

//Result format, this is what will show up in the browser document post.
console.log("I have spent $" + total.toFixed(2) + " on groceries over 5 weeks. " +
"" + "That is an average of $" + average.toFixed(2)  + " per week.");
//toFixed() is a method used to turn a number into a string, keeping two decimals (CITED on 3Schools.com)

// Problem 3 DISCOUNTS
// Problem:Calculate the discount with and without sales tax.

//Declaration:
var price = 200.00;
var discount = .10;
var description = "dive suite";
var tax = .09;

//Result variable, equation:
//Result variable, equation:
var discountWithoutTax = price * (1 - discount);
var discountWithTax = discountWithoutTax * (1 + tax);

////TRACE, this is what will show up in the browser document post.
//Your X was originally $X, but after a X% discount, it is now $X without tax, and $X with tax.
console.log("The " + description + " was originally $" + price + ".00, but after a " + discount + " discount " +
"was applied,\nit is now only" + " $" + discountWithoutTax.toFixed(2) + " without tax and $" + discountWithTax.toFixed(2) + " after tax.");