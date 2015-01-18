
 /*
Debbie Walker
Anyonymous
WPF 1411
11-14-14
 */

//alert("Testing 1,2,3!");

 //Function call - for normal function
 var returnedArea = triangleArea(8,15);
 console.log("Returned area for norma function " + returnedArea);

 /*

  SYNTAX:

  basic function
 function functionName(){
   code goes here

 }

 VS.

  //var function Name = function(){
  // code the function runs
  // }; MUST HAVE A SEMI COLON AFTER CURLY BRACKET
  //functionName(); - has to run code first - then it pushes the button

  */


 //Anonymous Functions - called CLOSURES - when it's needed it's created...
 //They are declared as variables -
 //because it's not hoisted and it's a VARIABLE, it has to go before the push button
 //used a lot for buttons inside of html (used in an else - if); build a factory if needed, else don't build it

//A normal function to find the area of a triangle
 function triangleArea(base, height){
  var area = .5 * base * height;
  return area;

 }

//Function call - for normal function
 var returnedArea = triangleArea(4,5);
 console.log("Returned area for norma function " + returnedArea);

////////////////

 //Anonymous function that calculates triangle area
 var anonTriArea = function(base, height){
  var area = .5 * base * height;
  return area;

 };

 //Function call for anonymous function
 var returnedAnonArea = anonTriArea(2,3);
 console.log("The returned area from the returned anonymous function is " + returnedAnonArea + ".");

