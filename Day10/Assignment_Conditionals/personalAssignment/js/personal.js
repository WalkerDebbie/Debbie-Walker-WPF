
/*
 Debbie Walker
 Day 6 | Personal
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

//Each must exist in at least one of the problems (ternary, else if, logical operator, relational operator other than ==)

//Problem 1 | Clock In...

//You need to electronically clock yourself in
//between 08:00 and 17:00 in order to get paid for the day.
//Assume you can only clock in on the hour.

//Problem: What to wear.

//Choose sweater if temp is between 60 - 80.
//Choose coat if temp is 60 <.
//Choose rain gear if it's raining.

//declare variables

var wardrobe = ["sweater", "coat", "rain gear"];//array of choices
var sweaterSum = 1;
var coatSum = 1;
var rainGearSum = 1;

alert("The weather in central Florida is fickle. Based on the forecast, what you you wear this week?")

//if/then statements...
//prompt user to choose a mode of transportation after each question...
weather = prompt("Monday and Tuesday's weather is between 60-70 today in sunny Florida, you choose... " + wardrobe);
if (weather === wardrobe[0]){//if array: vehicle unit is [0] is true
 sweaterSum++; //then add bike sum plus 1
} else if (weather === wardrobe[1]){// else if vehicle unit is [1]
 coatSum++; //then add scooter sum
}else if (weather === wardrobe[2]){//else if...vehicle unit [2]
 rainGearSum++; //then add car sum plus 1
}else{//then...re-prompt if no answer was given (this would have looped, if there was more time)
 weather = prompt("Monday and Tuesday's weather is between 60-70 today in sunny Florida, you choose... " + wardrobe);
 if(wardrobe = "");
 prompt("You forgot to input something.");
}

// /repeat comments for all questions...
weather = prompt("Then Wednesday through Friday the weather takes a turn for the worse and will drop down to 50, you choose... " + wardrobe);
if (weather === wardrobe[0]){
 sweaterSum++;
} else if (weather === wardrobe[1]){
 coatSum++;
}else if (weather === wardrobe[2]){
 rainGearSum++;;
}else {
 weather = prompt("Then Wednesday through Friday the weather takes a turn for the worse and will drop down to 50, you choose... " + wardrobe);
 if(wardrobe = "");
 prompt("You forgot to input something.");
}

weather = prompt("By Saturday warms up to 70 but has a 80% chance of winter storms, you choose... " + wardrobe);
if (weather === wardrobe[0]){
 sweaterSum++;
} else if (weather === wardrobe[1]){
 coatSum++;
}else if (weather === wardrobe[2]){
 rainGearSum++;
}else{
 weather = prompt("By Saturday warms up to 70 but has a 80% chance of winter storms, you choose... " + wardrobe);
 if(wardrobe = "");
 prompt("You forgot to input something.");
}

weather = prompt("Sunday is 50-80, partly sunny, with a 10% chance of rain, you choose.... " + wardrobe);
if (weather === wardrobe[0]){
 sweaterSum++;
} else if (weather === wardrobe[1]){
 coatSum++;
}else if (weather === wardrobe[2]){
 rainGearSum++;
}else{
 weather = prompt("Sunday is 50-80, partly sunny, with a 10% chance of rain, you choose.... " + wardrobe);
 if(wardrobe = "");
 prompt("You forgot to input something.");
}

if ((rainGearSum >= coatSum) && (rainGearSum >= sweaterSum)){
 var totalSum = wardrobe[2];
} else if ((coatSum >= rainGearSum) && ( coatSum >= sweaterSum )) {
 totalSum = wardrobe[1];
} else if ((sweaterSum >= coatSum) && (sweaterSum >= coatSum)){
 totalSum = wardrobe[0];
}

console.log(sweaterSum);
console.log(coatSum);
console.log(rainGearSum);

console.log("According to this weeks weather plans you should wear a " + totalSum + ".");