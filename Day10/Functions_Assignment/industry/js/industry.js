
/*
 Debbie Walker
 Industry
 WPF 1411
11-14-14
 */

//alert("Testing 1,2,3!");

/*
Each of the following requirements must exist in at least one of the 3 sub-projects:
   • A ternary
   • An else if
   • An anonymous function
   • An expression with two arithmetic operators
   • A function with three parameters
   • At least one logical operator

*/

//PART 1
//Figure out the size of your monitor.

//Math:Pythagorean theorem, which states that the sum of the squares of the two sides, a and b, is equal to the square of the hypotenuse, c: a^2 + b^2 = c^2 (which is the diagonal or size of the monitor's measurement).

//Declaring variables
var lengthMonitor = prompt("Enter your monitor screen's length.\nMake sure not to include the frame.");
//validation
    while(lengthMonitor === "" || isNaN(lengthMonitor)) {
        console.log("Please do not leave blank, and only use numbers.");
        lengthMonitor = prompt("Enter your monitor screen's length.\nMake sure not to include the frame.");
    }

var heightMonitor = prompt("Enter your monitor screen's height.\nMake sure not to include the frame.");

    while (heightMonitor === "" || isNaN(heightMonitor)) {
        console.log("Please do not leave blank, and only use numbers.");
        heightMonitor = prompt("Enter your monitor screen's height.\nMake sure not to include the frame.");
    }

//Function
function monitorSize(l, h) {
//code
    var sides = (lengthMonitor * lengthMonitor) + (heightMonitor * heightMonitor);
    var diagonal = Math.sqrt(sides);
//returns code to the function - to be called
        return Number(diagonal);

}
//Function call - caught through variable
var monitorScreen = monitorSize(lengthMonitor, heightMonitor);
console.log("Your monitor's screen size is classified as a: " + Math.ceil(monitorScreen) +
"-inch monitor.");

//PART 2
//Find the ppi of a monitor

//For example: 27 inch screen with a 2560x1440 resolution we get = sqrt(2560^2+1440^2)/27 = 109 PPI

//Since we now know what the screen size is we can do the math for PPI: sqrt((resolution length ^ 2) + (resolution height ^ 2)/screen size = monitor's pixels per inch


//COMMENTS: same comments as above; the only difference is that it had a differnt math equation and uses the variable from the first function to build into the equation for this function's result.

var lengthRes = prompt("Enter the monitor's length resolution in pixels.\nMake sure not to include the frame.");

    while(lengthRes === "" || isNaN(lengthRes)) {
        console.log("Please do not leave blank, and only use numbers.");
        lengthRes = prompt("Enter the monitor's length resolution in pixels.\nMake sure not to include the frame.");
}

var heightRes = prompt("Enter your monitor's height resolution in pixels.\nMake sure not to include the frame.");

    while (heightRes === "" || isNaN(heightRes)) {
        console.log("Please do not leave blank, and only use numbers.");
        heightRes = prompt("Enter your monitor's height resolution in pixels.\nMake sure not to include the frame.");
}


function monitorRes(l, h) {

    var pixels = ((lengthRes * lengthRes) + (heightRes * heightRes));
    var resolution = Math.sqrt(pixels);
    var ppi = resolution/monitorScreen;

        return Number(ppi);

}

var monitorPpi = monitorRes(lengthRes, heightRes);
console.log("Your size monitor will yield a: " + Math.round(monitorRes(lengthRes, heightRes)) + " PPI (pixels per inch).");


