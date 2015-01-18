/*
Debbie Walker
Random Function Numbers
WPF 1411
11-14-134
 */


//alert("Testing 1,2,3!");


//Create a normal or basic function that will take n a min and max number and a random integer between then. - NORMAL or BASIC returns a value

var min = prompt("Let's find a random number between 2 vales. \nWhat is the start number?");

//validate the user response...
while(min ==="" || isNaN(min)){

    min=prompt("Please do not leave blank, and only use numbers.");
}

var max = parseInt(prompt("What is the larger value or the max?"));
//validate the user response...
while(max ==="" || isNaN(max) || min>=max){

    max= parseInt(prompt("Please do not leave blank, and only use numbers."));

    if(max ===""){
    //User left blank. Let's yell at them
        max = parseInt(prompt("Please don't leave blank."));

    }else if(isNaN(max)){
        max= parseInt(prompt("Please only type numbers.\nWhat is the max value?"));

    }else if(Number(min)>=Number(max)){
        max=prompt("Please type in a number larger than the minimum value.");
    }
}

//create a random number generating function...

//function call...
var returnedNumber = randomizer(min, max);
console.log("Your random integer between" + min + "and " + max + " is " + returnedNumber + ".");

//create an array to catch the returned integers from the for loop...

var numbers=[];

//create a for loop and console.log 15 random integers

for(var i=0; i<15; i++){
    numbers.push(randomizer(min, max));

    console.log(numbers[i]);
}

console.log(numbers);

function randomizer(mn, mx){

    //create the variable to hold the random number...
    //Math.random * (max - min + min).
    var randomNumber = Math.round(Math.random() * (mx - mn) + Number(mn));

    //return the random number back to the main code
    return randomNumber;

}

