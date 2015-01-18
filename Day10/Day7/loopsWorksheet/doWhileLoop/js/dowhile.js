
/*
 Debbie Walker
 Day 7 While Loops
 WPF 1411
 11-10-14
 */


//Do While Loop
//executes the one once, while condition is true

//Syntax:
//do{
// code to be executed;
// }
//while (condition);

//If you have long hair, it can be a bitch to rinse.

//Declare variables...


var rinseHair = prompt("How many times do you rinse your hair?");

(rinseHair = (rinseHair === "")) ? prompt("Please answer the question."):
(rinseHair = (rinseHair > 3) != (rinseHair = (rinseHair <= 2)) ); console.log("The squeak means your hair has been properly rinsed.");

if(rinseHair = (rinseHair <= 2) != (rinseHair = (rinseHair > 3))) {

    do {
        console.log("Keep rinsing until you hear your hair squeak.");
        rinseHair++;
    }
        while (rinseHair < 2){
    }
}