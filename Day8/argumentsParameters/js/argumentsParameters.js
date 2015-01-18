
 /*
Debbie Walker
Arguments & Parameters
WPF 1411
11-12-14 */

//alert("Testing 1,2,3!");

 //Argument goes into the function - part of the function call
 //Parameter catches the argument and is used inside of the function

 //create function that calculates the area of a rectangle


//THIS IS A BAD EXAMPLE!!!! it hard codes values for width and height
 function calcArea(w,h){//PARAMETERS go here (these are the lables that go on the side of the cart that goes through the factory
  var width = 10;
  var height = 20;
  var area = width*height;

  console.log("The area of your rectangle is " + area);
 }

 calcArea(4,5);//ARGUMENTS go here



 //THIS IS A BAD EXAMPLE!!!! it hard codes values for width and height
 function calcArea(w,h){//PARAMETERS go here (these are the lables that go on the side of the cart that goes through the factory
  var width = 10;
  var height = 20;
  var area = w*h;

  console.log("The area of your rectangle is " + area);
 }

 calcArea(4,5);//ARGUMENTS go here

 calcArea(2,3);//PARAMETERS HAVE TO MATCH ARGUMENTS

 var width = prompt("Width:");
 var height = prompt("Length:");
 calcArea(width, height);

 //////////////

 //Calculate dog years = human years * 7

 function dogYears(humanAge){//the PARAMETER holds the value

  //DO NOT DO...
  //var dogAge = yourAge*7;//THIS IS WRONG

  dogAge = humanAge * 7;//this is CORRECT - DO NOT HARD CODE
  console.log("You are " + dogAge + " years old in dog years!");

 }

 dogYears(36);

 var yourAge = prompt("Please type in your age:");
 dogYears(24);

 var fredsAge = prompt("How old is your friend Fred?");
 dogYears(fredsAge);





