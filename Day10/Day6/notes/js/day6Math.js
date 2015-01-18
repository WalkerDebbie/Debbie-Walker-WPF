
/*
 Debbie Walker
 Day 6 Math
 WPF 1411
 11/7/14
 */

//alert("Testing 1,2,3!");

//Normal rounding

//.5 + goes up, else goes down

var num1 = 9.444;
console.log(num1);
console.log(Math.round(1));

//Florro round

//Always rounds down

var num2 = 6.8;
console.log(num2);
console.log(Math.floor(num2));

//Ceiling round

// Always rounds up

var num3 = 4.1;
console.log(num3);
console.log(Math.ceil(num3));

// How to get specific number of decimals
// toFixed - not part of Math

var num4 = 6.7893;
console.log(num4);
console.log(num4.toFixed(2));

//Random numbers
//Math.random() - gives values of 0 to almost 1 (.9999999)
//Nothing goes inside of the ()

var num5 = Math.random();
console.log(num5);

// Number between 0 and 10
var num6 = Math.random()*10;
console.log(num6);

//What about integer between 0-10 (integer is whole numbers)
var num7 = Math.round(Math.random()*10); // = give me the random number, then random it
console.log(num7);

//Integer for 0-100
var num8 = Math.round(Math.random()*100); // = give me the random number, then random it
console.log(num8);

//random integer between any two values
//Math.random() * (max-min) + min

//numbers between 50 - 80
var num9 = Math.random(Math.random() * (80 - 50) + 50);
//num9 = num9.toFixed(2); - this gets rid of all the .0000000
//num9 = num9 Math.round(Math.random(Math.random() * (80-50) + 50));
console.log(num9);

//Prompt the user for a max and min value
//Then find the random number between them

var max = prompt("Let's find a random number, what's the max value?");
var min = prompt("Please type in a min number");

//Find the random integer
console.log("What is the random number?")

var randomNum = (Math.random() * (max - min) + Number(min));//or you could parseInt -
// because prompts are returning text strings and + is concantenating
console.log("Your random number is " + randomNum + ".");

//Math Class "Constant" - never changes
//Math.PI - 3.1459....
//Circumference of a circle = 2 * pi * r

var radius = 7;
var circleArea = 2*Math.PI * radius;
console.log(circleArea);

