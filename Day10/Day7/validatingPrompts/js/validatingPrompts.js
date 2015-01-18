
 /*
Debbie Walker
Validating Prompts
WPF 1411
11-10-12 */

//alert("Testing 1,2,3!");

//min max number - find a random in between
 //Math.round(Math.random()*(max-min)+min)

 //Ask the user for a minimum variable

 var min = prompt("Let's find a random number, what's the minimum?");

 //Test if the user skips the prompt - they just press enter

 /*
 if(min===""){
  //The user just pressed entered
  //Reprompt the user
   min = prompt("What's the minimum value? \nPlease do not leave blank.");
 }
     */
/*
 //because we don't know how many times the user will have to do this, we will use the while loop

 while(min===""){
  //as long as user skips; reprompt
  min = prompt("What's the minimum value? \nPlease do not leave blank.");
//this does not work for words

 }

 //Validate the user information

 //Function that checks the type of var

 //isNaN(variable to check) BOOLEAN

console.log(isNaN(7));//is 7 NOT a number ? = false
 console.log(isNaN("Cat")); //is "Cat" NOT a number? = true

 while(isNaN(min)){
  min=prompt("Please only type in numbers! \nWhat is the minimum value?");

 }
*/


 //Combine them together SHORTER CODE

 while(min==="" || isNaN(min)){

  if(min===""){
     min = prompt("Please do not leave blank. \nWhat is the minimum value?");
  }else{
   prompt("Only type in numbers.");
  }
 }
 do{
  var max = prompt("Please only type in numbers and don't leave blank.\n)" +
  "What is the max value?");


 }while(max==="" || isNaN(max));

 //Validate if the user types in EXACTLY what you want

 var question = prompt("Please type in yes, or no.");

 while(question != "Yes" && question != "yes" && question != "no" && question != "No"){ //or you could have used "Yes".toLowercase
  //switch || to && so that the code above will work
    question = prompt("Please type in ONLY Yes or No:");
 }