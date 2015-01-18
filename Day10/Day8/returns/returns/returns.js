
 /*
Debbie Walker
Add title
WPF 1411
Add date
 */

//alert("Testing 1,2,3!");


 //Function preference; place at the bottom of the code, like a glossary or index
 //computer can "HOIST" the function because it scans all the code first and knows where to call on it

 //Returning values from a function
 //Or how do we get stuff out of "vegas"

 //create a function area of rectangle

 function calcArea(wid, len){

  var area = wid * len;

  console.log("The are inside f function is " +area);

  //return the area variable to the main code
  return area;

 }

 //function call
 //catch the returned value with a variable
 var returnedArea = calcArea(30,20);

 //console.log(area);

 var width = prompt("Please enter a width:");
 var length = prompt("Please enter a length");

 length = validateMe(length);

 var userRectArea = calcArea(width, length);

 var userRectPeri = periRect(width,length);

 console.log("The area of a rectangle with a width of " + width + "and a length of " + length + "is " + userRectArea + "\nThe perimeter is " +userRectPeri);


 //create a function to find the perimeter of a rectangle
 function periRect(wid, len){
  var perimeter =  wid * 2 + len * 2; //returns a text string THIS MUST CAST (if you are adding + Number(wid + len) as an example

  //return the perimeter
  return perimeter;

 }



//while(width ==="" || is NaN(width)){
 width = prompt("Please only type in number and don't leave blank.");

 //creating a validate function for a repeating function
 function validateMe(userPrompt){
  while(userPrompt === "" || isNaN(userPrompt)){

   //if TRUE = reprompt the user

   userPrompt = prompt("Please type in only numbers and don't leave blank.");

   return userPrompt;

  }

 }

