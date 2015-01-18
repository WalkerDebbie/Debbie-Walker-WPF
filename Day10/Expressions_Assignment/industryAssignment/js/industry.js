
/*
 Debbie Walker
Industry
 WPF 1411
11/3/14
 */

//alert("Testing 1,2,3!");
//Part 1
//What will your gross take home be for a week?
//Declare variables:
var hours = prompt("Please enter the hours you worked this week:");//if I entered 40
var rate = prompt("Please enter your hourly rate:");//if I entered 10
var holiday = prompt("Please enter your total hours for a holiday:");//if I entered 8

//Define the value/equation:
var regPay = (hours -= holiday) * rate;//Math calculation: (40 - 8) * 10 = 320
var holidayPay = holiday * (rate * 1.5);//Math calculation: 8 * (10 * 1.5) = 120
var gross = regPay += holidayPay;//Math calculation: 320 + 120 = 440

//Print answer for user by console.log:
console.log("Your gross take home will be $" + gross.toFixed(2) + " this week.");


//Part 2
//What will be your net take home (after taxes) based on the gross take home you just calculated?
//Declare variables:
var fixedTaxes = [.07,.15,.03];
var totalFixedTaxes = fixedTaxes[0] + fixedTaxes[1] + fixedTaxes[2];

//Define the value/equation:
var netPay = gross - (gross * totalFixedTaxes);//multiply the gross by the total fixed taxes and minus the gross for the net

//Print net pay for user, using the console.log:
console.log("After you pay Uncle Sam, you will be left with $" + netPay.toFixed(2) + ".");

