/*
Debbie Walker
Day 4 Arrays
WPF 1411
11/3/14
 */

//alert("Testing to sif if linked!");

//Start a basic array
var avengerNames = ["Hulk", "Spiderman", "Ironman"];
console.log(avengerNames);

//Access a specific avenger in our array

console.log(avengerNames[1]);

//We can use a variable ot represent our index number as well.

var num = 2;

//Lets print ironman's name

console.log(avengerNames[num]);

//Add an avenger to our array

avengerNames [3] = "Thor";

console.log(avengerNames);

//figure out the length of an array (in case there are a lot of indexes)
// .length property
//Do syntax - put a period in front of it

console.log(avengerNames.length);

//add another avenger

avengerNames[avengerNames.length] = "Captain America";
console.log(avengerNames);


//Add Black Widow to the mix
avengerNames[avengerNames.length] = "Black Widow";



//Access the last avenger in the array
console.log(avengerNames[avengerNames.length -1]);

//New method specific ot arrays called push
//it adds whatever we put in automatically to end of our array.
avengerNames.push("Hawkeye");
console.log(avengerNames);

//--------- POP METHOD of array that removes the last item in the array
//last one in, first one off

avengerNames.pop();
console.log(avengerNames);

//you can save the popped variable if you want to
//by setting a variable equal to that pop method
var soloAvenger= avengerNames.pop();
console.log(avengerNames);

console.log(soloAvenger);

//Pick oranges every day
//Track how many oranges are picked in each day

var orangeBins = [234, 464, 232];
//how many oranges were picked in total
//sotre that in a variable

var orangeTotal = orangeBins[0] + orangeBins[1] + orangeBins[2];
console.log(orangeTotal + " is the total number of oranges picked.");

var orangeAve = orangeTotal/orangeBins.length;
console.log("The average amount of oranges picked in " + orangeBins.length + " days is " + orangeAve + ".");
//try not to add hard code (try to use as much as flex code as much as possible)

//ARRAYS hold variable inside of variables