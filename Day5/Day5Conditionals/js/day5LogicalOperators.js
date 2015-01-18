
/*
 Debbie Walker
 Steak Temp
 WPF 1411
 11/5/14
 */

//alert("Testing 1,2,3!"););

//Buying an ipad
//If the price is less than or equal to our budget OR our paycheck is over $1,000
//the we can buy the iPad

var budget = 300;
var iPadPrice = 500;
var payCheck = 1200;

//&& logical operator
//The iPad must be BOTH of these things

if(iPadPrice <= budget && payCheck > 1000 ){
 console.log("iPad is within your budget and your check is over $1000.");

} else {
 console.log("Can't buy the iPad.")

}

//|| - or logical operator
//we can if one of hte conditions is met

if(iPadPrice <= budget || payCheck > 1000){
 console.log("You can buy the ipad!");

} else {
 console.log("You can't buy the ipad.");

}

//Embedding another logical operator inside of the if statement

var wonLottery = true;

if((iPadPrice <= budget && payCheck > 1000) || (wonLottery)){
 console.log("iPad is within your budget and your check is over $1000.");

} else {
 console.log("Can't buy the iPad.");
}