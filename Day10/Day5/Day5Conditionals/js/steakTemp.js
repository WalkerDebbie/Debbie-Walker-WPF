
 /*
Debbie Walker
Steak Temp
WPF 1411
11/5/14
 */

//alert("Testing 1,2,3!");


//How cooked is a steak? Ask for steak preference.


/*
 Extra-rare 46–49 °C	115–120 °F
 Rare 52–55 °C	125–130 °F
 Medium rare 55–60 °C	130–140 °F
 Medium 60–65 °C	140–150 °F	145 °F and rest for at least 3 minutes
 Medium well 65–69 °C	150–155 °F
 Well done 	71 °C+	160 °F+	160 °F for ground beef
*/

// Declare and define the variable steak temp

 var steakTemp = prompt("What temperature would you like your steak?");

 if(steakTemp < 115){
  console.log("Uncooked Meat - Moooo!");

 } else if(steakTemp <= 120){
  console.log("Your steak is Extra-Rare.");

 } else if(steakTemp <= 130){
  console.log("Your steak is Rare.");

 } else if(steakTemp <= 140){
  console.log("Your steak is Medium-Rare.");

 } else if(steakTemp <= 150){
  console.log("Your steak is Medium-Well.");

 } else if(steakTemp <= 160){
  console.log("Your steak is Well Done.");

 } else {
  console.log("Your steak is burnt.");
 }

//_____________________________

 //Logical Operators, compares two booleans and returns a boolean back

// && - apersands (and), || - called pipes (or) , ^ (true and/or false), ! (switches the value from true to false or false to true)

 // (a < b && b > a) = true

 // Multiple Conditions

 // if(a == b || (b == c && c == 5))
