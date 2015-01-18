
 /*
Debbie Walker
Day 5 Ternary
WPF 1411
11/5/14 */

//alert("Testing 1,2,3!");

 //If your gap is greater than 2.0 then you graduate

 var gpa = 3.5;

 if(gpa > 2.0){
  console.log("Congrats you graduate.");

 } else {
  console.log("Sorry, study more!");

 }


 //Convert to a ternary

 (gpa > 2.0) ? console.log("Congrats you graduate.") : console.log("Sorry, study more!");

 //Set a variable equal to the outcome

 // based on kids age they will read one of two books
 // kids under 10 read Green Eggs and Ham
 // kids 10 and older read The Time Machine

 var age = 16;
 var book;

book = (age > 10) ? "The Time Machine" : "Green Eggs & Ham";
 console.log(book);

 //Ternary inside of Ternary
 //kids 14 and older read Twilight

 book = (age < 10) ? "Green Eggs & Ham" : (age < 14) ? "Time Machine" : "Twilight";
 console.log(book);

