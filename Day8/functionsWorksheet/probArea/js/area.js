
/*
 Debbie Walker
 Add title
 WPF 1411
 Add date
 */

//alert("Testing 1,2,3!");

/*

/*Problem: Calculate the circumference of a circle.

Parameter(s) for function:
Radius of the circle
Return:
    Circumference of the circle
Result to print to the console:
    “The circumference of the circle is X”;

        The circumference of a circle can be found by multiplying pi ( π = 3.14 ) by the diameter of the circle.
    If a circle has a diameter of 4, its circumference is 3.14*4=12.56
    If you know the radius, the diameter is twice as large.

*/


var diameter = prompt("Please enter the diameter of the circle.");
while(diameter === "" || isNaN(diameter)){
    console.log("Please only type in a number and don't leave blank.");
    diameter = prompt("Please only type in a number and don't leave blank.");
}

var radius = diameter/2;
var pi = Math.PI;
var circumference = radius * pi;

//create a function
function circCircl(diameter, radius, pi){//

    //returns the variable to the main code
    var circumference = (diameter/radius)*pi;
    return circumference;
}

//function call
//catch the returned value with a variable
var circle = circCircl(diameter, radius, pi);
//print answer...
console.log("The circumference of the circle is " + Math.round(circle) +".");
