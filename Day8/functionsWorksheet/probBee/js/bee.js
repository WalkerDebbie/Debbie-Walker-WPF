
 /*
Debbie Walker
Functions Bee
WPF 1411
11-12-14
 */

//alert("Testing 1,2,3!");

//Unless you are allergic, the average person can handle 10 stings, per pound from a normal bee
 //8.6666666667

 //declare variables
 var weight = prompt("Please enter your weight.");
 while(weight === "" || isNaN(weight)){
 console.log("Please only type in a number and don't leave blank.");
  weight = prompt("Please only type in a number and don't leave blank.");
 }

 var stings = 8.666666667;

 function beeStings(w,s){
  var death = weight * stings;

  return death;//returns the variable to the function

 }
//variable stores the function value
var bees = beeStings(weight * stings);
console.log("It would take a swarm of " + Math.round(bees) + " bees to sting you before you would die.");

alert("Keep babies and small animals away from bees.");