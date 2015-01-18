
/*
Debbie Walker
Day 7 While Loops
WPF 1411
11-10-14
*/

//alert("Testing 1,2,3!");


//While Loop
 //  Used to run if you don't know how many times you want/need to run something
 //     Number, if you need to code for people to enter a number -
 //syntax:
 // var i = prompt("Please enter number.");
 // while(i < 10){
 //    doSomething(i);
 //    i++;


//You are bidding on an ebay item.
//Seller has a minimum bid at $20, but you do not know this.
//What will your maximum bid be for this item?


//Declared variables...
var minBid = 20;
var maxBid = prompt("Please enter your maximum bid.");//statement
//While loop
while(maxBid === "") {//comparisons
 prompt("Please enter a number.");
 maxBid++;
}
//add conditionals...
if(maxBid < minBid){
 console.log("Congratulations! You've won the bid.");

}else if(maxBid >= minBid) {
 console.log("Sorry, better luck next time.");//print to browser
}