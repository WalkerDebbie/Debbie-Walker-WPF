
/*
 Debbie Walker
 Day 6 | Wacky
 WPF 1411
 11/7/14
 */

//alert("Testing 1,2,3!");

//min two factors or givens
//min two prompts
//"" if value is empty "You forgot to input something!"
//if(""){
// prompt("You forgot to input something!")
// }

//Each must exist in at least one of the problems
// (ternary, else if, logical operator, relational operator other than ==)


//Problem: Will you be able to buy a cat house or
// will you have to buy a dog house for your cat?

//Ask user what the size of their cat is?
// Cats need an extra square foot of space in their house
// to be cozy.

//Declare variables:

var catHeight = prompt("Enter your cat's height.");
   if(catHeight === ""){
    prompt("Sorry, you forgot to add something.");

   }
var catLength = prompt("Enter your cat's length.");
   if(catHeight === ""){
   prompt("Sorry, you forgot to add something.");
   }
var catStature = prompt("Enter your cat's width.");
   if(catHeight === "") {
    prompt("Sorry, you forgot to add something.");
   }
var catArea = (catHeight * catLength * catStature);
    if(catArea === "") {
    prompt("Sorry, you forgot to add something.");
   }
var catTail = prompt("Does your cat have a tail?");

var catHouse;

//Ternary, logical operator and relational operators...

catHouse = (catArea <= 2400 || catTail == !(true)) ?
    console.log("Great, we have a cat house in stock for you.")
    : console.log("Sorry, we only have small dog houses in that size.");

//I tried adding one, making it an if, if else, else,
// but I'm not sure how to add : - it kept giving me errors