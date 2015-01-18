
/*
 Debbie Walker
 Industry
 WPF 1411
 11/3/14
 */

//alert("Testing 1,2,3!");

//Variable Scope
//variables inside and outside of a function

//We try not to use the same names for variables; however in large
//files this becomes impossible...

//When you create a variable inside of a function, it only
//exist inside of that one function (WHAT HAPPENS HERE, STAYS HERE)


//create a variable for width (main code)

var width = 5;//in scoping terms: this is going to be scoped OUTSIDE of the main function or scoped to MAIN CODE

console.log(width);
//create a function that calculates the perimeter of a rectangle

function calcPeri(){

    //console.log("In function, before declaration "+width);THIS WILL NOT
    //PRINT because it is before the var width

    var width = 10; //scoped to the function calcPeri
    console.log("Inside of the function, the width is " + width);
    var height = 20;
    var perimeter = width*2 + height*2;

    console.log("Inside of function is the perimeter is " + perimeter);
}

console.log("Before function call " +width);
calcPeri();
console.log("After function call "+width);

//This console won't work because you cannot see inside of the funciton
//console.log("Outside of function perimeter is " +perimeter);