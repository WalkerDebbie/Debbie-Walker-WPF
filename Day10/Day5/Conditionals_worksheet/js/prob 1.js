/*
 Debbie Walker
 Day 5 Worksheet
 WPF 1411
 11/5/14
 */

//alert("Testing to sif if linked!");

//Problem 1: Expressions with Conditionals


//input: since there are two scales for temperature prompt user to choose c/Celsius
// or f/Fahrenheit
//declare the math formula for Celsius and Fahrenheit
var degree = prompt("Enter the temperature you want to convert.");
//input: have user enter the temperature they want converted
var conversion = prompt("Choose a conversion: Fahrenheit or Celsius.");


var celsius = (degree - 32) * 5/9; //Celsius math equation
var fahrenheit = degree * 9/5 + 32; //Fahrenheit math equation


if(conversion === "Celsius"){
 console.log(Number(celsius) + " Celsius");
}else if(conversion === "Fahrenheit"){
 console.log(Number(fahrenheit) + " Fahrenheit");
}

