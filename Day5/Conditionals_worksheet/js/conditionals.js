
 /*
Debbie Walker
Conditionals Worksheet
WPF 1411
11/5/14 */

//alert("Testing 1,2,3!");


 //Problem 1: Expressions with Conditionals


 //input: since there are two scales for temperature prompt user to choose c/Celsius
 // or f/Fahrenheit
 //declare the math formula for Celsius and Fahrenheit
 var number = prompt("Enter the temperature you want to convert.");
 //input: have user enter the temperature they want converted
 var scale = prompt("Choose the conversion; Fahrenheit or Celsius.");
 // (referenced http://albireo.ch/temperatureconverter/formula.htm)
 var celsius = (number - 32) * 5/9; //Celsius math equation
 var fahrenheit = number * 9/5 + 32; //Fahrenheit math equation

 //if scale == fahrenheit || scale != celsius
 value = (scale.toLowerCase() === fahrenheit) ? Math.round(fahrenheit) +  " Fahrenheit" : (scale.toLowerCase() != fahrenheit) +  Math.round(celsius) + " Celsius";

 console.log(value);



/*
 //declare the math formula for Celsius and Fahrenheit (referenced http://albireo.ch/temperatureconverter/formula.htm)
 var number = prompt("Enter the temperature you want to convert.");

 //input: have user enter the temperature they want converted
 var scale = prompt("Choose the conversion; Fahrenheit or Celsius.");

 // (referenced http://albireo.ch/temperatureconverter/formula.htm)
 var celsius = (number - 32) * 5/9; //Celsius math equation
 var fahrenheit = number * 9/5 + 32; //Fahrenheit math equation

 if((scale === fahrenheit) || (scale !== celsius)){
  console.log(fahrenheit + " Fahrenheit");
 } else {
  console.log(celsius + " Celsius");
 }
*/

 //_____________________



 //Problem 2 | Do you know your login information?

 //Declare variables: prompt user to add username and password...
 var username = prompt("What is your username?");
 var password = prompt("What is your password?");

 if((username === null) || (password === null)){
  alert("Sorry, we don't support hackers.");
  console.log("Please go away.");
  //if username OR password are in incorrect alert user...
 }else if((password != password) || (username != username)){
  alert("Please retry, one of your entries is incorrect.");
//if username AND password are correct then alert user...
 }else if ((username === username) && (password === password)) {
  alert("Welcome back " + username + ", it's good to work with you again.");
 }



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


