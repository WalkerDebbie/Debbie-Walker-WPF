
 /*
Debbie Walker
Personal
WPF 1411
11-11-14 */

//alert("Testing 1,2,3!");

 /*
  //How to Calculate Underwater Pressure

  1. Define the depth for which you wish to calculate the pressure. Determine whether the water is salt water or is it fresh water.
  2. Multiply the depth in feet by 0.432 to calculate the underwater pressure in fresh water, in pounds per square inch (psi). If the depth of fresh water is 100 feet, then: 0.432 x 100 = 43.2 pounds per square inch.
  3. Multiply the depth in feet by 0.445 to calculate the underwater pressure in salt water, in pounds per square inch. If the depth of fresh water is 100 feet, then: 0.445 x 100 = 44.5 pounds per square inch.
  */

//Declare and assign variables...

 //Fixed givens:
 var saltWater = 0.432;
 var freshWater = 0.445;


 var depth = prompt("Please enter the depth (in feet) that you plan to SCUBA dive.");
 while(depth === "" || isNaN(depth)) {
  console.log("Please don't leave blank, and only use numbers.");
  depth = prompt("Please enter the depth, in feet, that you wish to SCUBA dive.");
  //This line is very important to prevent an endless loop!!!!
 }

 var water = ["salt", " fresh"];
 var waterType = prompt("What type of water will you be diving? " + water + " :");


 function waterInPounds1() {
  var saltPoundsPerSqInch = depth * saltWater;//for 50 ft * .0432 would equal 21.6 ppsi
  return saltPoundsPerSqInch;
 }
 var returnSaltWater = waterInPounds1(depth * saltWater);
 //console.log(returnSaltWater);

 function waterInPounds2() {
  var freshPoundsPerSqInch = depth * freshWater;
  return freshPoundsPerSqInch;
 }
 var returnFreshWater = waterInPounds2(depth * freshWater);
 //console.log(returnFreshWater);

 while(waterType === "") {
  console.log("Please don't leave blank; enter yes or no.");
  depth = prompt("Will you be diving in salt water?");
 }//else if...
 if(waterType === "salt") {
  console.log("At " + depth + " feet, your underwater pressure, in pounds per square foot will be " + parseInt(returnSaltWater) + " feet in salt water.")
 }else {
  console.log("At " + depth + " feet, your underwater pressure, in pounds per square foot, will be " + returnFreshWater + " feet in fresh water.");
 }