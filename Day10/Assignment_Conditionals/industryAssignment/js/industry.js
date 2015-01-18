
/*
 Debbie Walker
 Day 6 | Industry
 WPF 1411
 11/7/14
 */

//alert("Testing 1,2,3!");

//min two factors or givens
//min two prompts
//"" if value is empty "You forgot to input something!"
//if(""){
// prompt("You forgot to input something!")
// }

//Each must exist in at least one of the problems
// (ternary, else if, logical operator, relational operator other than ==)

//Problem 1 | Clock in:


//Declare variables:

//You need to electronically clock yourself in
//between 08:00 and 17:00 in order to get paid for the day.
//Assume you can only clock in on the hour.

//alert user to input action: do something...
alert("eCLOCK-In");
//prompt user id...
var userId = prompt("Enter your user ID.");
//declare id
var id = "123";
//declare userName
var userName = "SuperStar";
//if condition 1
if(userId === id){
    //print to console
    console.log("Welcome back " + userName + ".");
    //if condition 2
}else if(isNaN(userId) != true){
    console.log("Not a valid userId.");
    //else if nothing is entered...
}    //else if nothing is entered...

//prompt user to enter military time...
var scheduleTime = prompt("Enter your military time " +
"(example: 1 pm = 13)." +
"                        NOTE: after 17:00, it will be applied to the next business day.");
//if, time is between 08:00 and 17:00 user to schedule time...
if(scheduleTime >=8 || scheduleTime <=17){
    //print console, we received your time...
    console.log("Thank, we received your time.");
//else if they enter a time outside of 08:00 - 17:00
}else if (scheduleTime <8 && scheduleTime >17){
    console.log("Sorry, that is not a scheduled time, please re-enter.");
    //else if not number answer is not a userId
}else if(isNaN(userId) != true){
    //print not valid...
    console.log("Not a valid userId.");
    //else if nothing is entered...
}
