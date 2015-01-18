
/*
 Debbie Walker
Looping Arrays
 WPF 1411
 11/12/14
 */

//alert("Testing 1,2,3!");

//Looping over arrays

//for (var i = 0; i < arrayName.length; i++){}

//create an array
var names = ["Scooby", "Shaggy", "Fred", "Velma", "Daphne", "ScrappyToo"];

//tell each one of them that they solved the case

for(var i = 0; i < names.length; i++){
    console.log("You've solved the case " + names[i] + "!");

}

//create an array of bills to pay

var bills = [50,10,5,20,10];

//let's add up our bills

//create a total bills var outside and above our loop
var totalBills = 0;

for(var j = 0; j < bills.length; j++){
    //add each individual to the total bills
    //totalBills += bills[j]; //=total Bills + bills[j]

    //Only care about bills that are $20 or higher
    if(bills[j]>=20){
        //if this is true, add that bill to the total
        totalBills +=bills[j];
    }
}
console.log("Your total bills are " + totalBills + ".");

