
 /*
Debbie Walker
Add title
WPF 1411
Add date
 */

//alert("Testing 1,2,3!");

//Casting variables - treat one variable type as another

 var stringVar = "6";
 var results = 7 + stringVar;
 console.log(results);

 //To cast a variable as a number
 //Number() - anything inside of the () is treated as a number - if it makes sense

 var castingResults = 7 + Number(stringVar);
 console.log(castingResults);

 //Casting numbers as a string
 //String() - treats anything inside as a text string
 //phone number

 var areaCode = 407;
 var firstPart = 332;
 var secondPart = 3993;

 //Concatenate the phone number to one variable


 var phoneNumber = String(areaCode) + String(firstPart) + String(secondPart);
 console.log(phoneNumber);

 phoneNumber = "(" + areaCode + ")" + "-" + firstPart + "-" + secondPart;
 console.log(phoneNumber);

 // 7 cats
 //Parsing Integers
 //parseInt() - looks through a text string and returns the integer in it

 //Only the first number is returned
 //the number has to be the first thing in the text string
 //IF parseInt can't find it - returns NaN
 //NaN - Not a number

 //does the text string start with a number? if yes...if not NaN

 var a = parseInt("40 Years 7 years ago");
 console.log(a);

 var b = parseInt("I am 40 years old.");
 console.log(b);

// ANY TIME YOU PROMPT A USER IT RETURNS A TEXT STRING!!!!!!!!!! prompt() RETURNS textstrings

var cupsHad = prompt("How many cups to you have?");
var cupsBought = prompt("How many are you goint to buy?");
//add the number of cups I had plus what I am buying
var totalCups = cupsBought + cupsHad;
 console.log(totalCups);//this prints 2222 (which is wrong)


 totalCups = Number(cupsBought)//number cant fine number because it looks at
// the whole string and does not understand so it says NaN
+ parseInt(cupsHad);//parseInt sees number
 console.log(totalCups);//this works

 //HOMEWORK REVIEW
 //1 math operator ( =, >=, <=, *=, /=, +=, --, ++)
 //use an array (how much money on comics? how much a week, per 1 per comic, plus how many weeks 52
 //assignment operator =,
 //what kind of graphics, charge for website, how many fonts
 //var total = check 1, check 2, check 3 (for total table/3)



