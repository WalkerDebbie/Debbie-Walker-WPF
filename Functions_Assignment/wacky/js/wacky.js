
 /*
Debbie Walker
Wacky
WPF 1411
11-11-14
 */

//alert("Testing 1,2,3!");


 /*
 GOAL: Each of the following requirements must exist in at least one of the 3 sub-projects:
 A ternary
 An else if
 An anonymous function
 An expression with two arithmetic operators
 A function with three parameters.
 At least one logical operator
 */

//How many balloons would it take to fill up my bedroom?
//How many red?, blue?, pink?


 //Declare variables:

 //Function argument variables in feet...
 var length = prompt("Enter the length of your room in feet.");
 while(length === "" || isNaN(length)){
  console.log("Please do not leave blank.");
  length = prompt("Enter the length of your room in feet.");
 }

 //Function argument variables in feet...
 var width = prompt("Enter the width of your room in feet.");
 while(width === "" || isNaN(width)){
  console.log("Please do not leave blank.");
  width = prompt("Enter the width of your room in feet.");
 }

 //Function argument variables in feet...
 var height = prompt("Enter the height of your room in feet.");
 while(height === "" || isNaN(height)){
  console.log("Please do not leave blank.");
  height = prompt("Enter the height of your room in feet.");
 }

 //Balloons in cubic inches...

 var balloonSize = prompt("Enter a balloon size. Only use numbers in inches.");
//validation
 while(balloonSize === "" || isNaN(balloonSize)){
  console.log("You forgot to enter something.");
  balloonSize = prompt("Choose the size of balloon you wish to use to fill the room up with. Please only use inches in numbers.");
 }

 //Function argument variables converted from feet to inches...
 var  lengthConverted = Number(length) * 12;
 var  widthConverted  = Number(width) * 12;
 var  heightConverted = Number(height) * 12;

 //Anonymous function...
 var roomVol = function(){
  var volume = (Number(lengthConverted) * Number(widthConverted) * Number(heightConverted));
  return volume;
 };
 var roomVolTotal = roomVol();

//Functions declared:
function balloonVol(){
  var volume = balloonSize * balloonSize * balloonSize;
  return volume;
}
 var balVol = balloonVol();

 //console.log(Number(roomVolTotal) / Number(balVol) );

 //math is: room area(converted from feet to inches) / balloon area...
 (balloonSize[0 < 4000]) ? alert("Choose larger balloons, or it will take forever to fill this room.") : alert("It's insane how many balloons are needed.");

 console.log("You will need " + Math.round(Number(roomVolTotal)) / Math.round(Number(balVol)) + balloonSize + "-inch balloons to fill up your room.");

console.log("\n\n\nDan I will be eternally grateful for your teaching! I learned so much from you in such a short time-period and wish that you were teaching everyone of my web classes!!!!!! I'm successful, because of you!!! \n- LOOK AT ME GO!!!!!");


