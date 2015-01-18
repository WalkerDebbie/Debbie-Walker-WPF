/*
 Debbie Walker
 Day 5 Conditionals
 WPF 1411
 11/5/14
 */

//alert("Testing to sif if linked!");

//Basic Conditional

// Is this child old enough to ride the ride?

//Create a boolean variable
var oldEnough = false;

//If the child is old enough, console log they can ride

/*
if(condition to test){
Code is true goes here
}
 */

if(oldEnough){
    //True code goes here
    console.log("You are old enough to ride the ride!");


} else{
    //False code goes here
    console.log("Sorry, you are not old enough.")

}
console.log("After the if statement.");

//__________________________________

//Relationship Operators compares two values and return a boolean (true or false)
// >, <, etc.

//Equality Operators
// ==, ===, !=

//_________________________________

//If the kid is over 48" tall, then he can ride

//Create a variable to hold the kids height 50"

var kidHeight = 40;
var sneakerLift = 2;

//Create a variable for kin min height
var minHeight = 48;

//If your parent goes on the ride with you  - 45" and over can ride

var wParentHeight = 45;

//If statement
if(kidHeight > 48){
    //True code goes
    console.log("Congrats, your tall enough to ride!");

} else if(kidHeight >= wParentHeight){
    console.log("You can ride, but ony with your parent.");

} else if(kidHeight + sneakerLift > 48){
    console.log("You can ride the ride, you cheater!");

} else { //never gets parenthesis is only followed by curly brackets
    //False code goes here
    console.log("Sorry kid, your too short. Come back after your next growth spurt.");
}

