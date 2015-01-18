
 /*
Debbie Walker
Procedures
WPF 1411
11/14/14
 */

//alert("Testing 1,2,3!");

 //a Basic FUNCTION (because it returns)

 function calcArea(width, height){
  var area = width * height;
  return area;
 }

 //function call
 var returnedArea = calcArea(6,7);//this is hard coded example
 console.log(returnedArea);




 //Procedure - console.log the perimeter (because it does not return)

 function calcPeri(width, height){
  var peri = width * 2 + height * 2;

  //console.log the peri inside of the procedure THIS IS THE DIFFERENCE
  //BETWEEN basic and procedure

  //PROCEDURE DOES NOT RETURN A VALUE!!!

  //Does not return a value - runs this once and is done
  var tempArea = calcArea(width, height);
  console.log(peri + "is the perimerter and "+ tempArea + " is the area.");

 }

 //function call the procedure
 //DO NOT CATCH WITH A VARIABLE  - this would be like an Alert
 calcPeri(6,7);//this is the start button for the function procedure


