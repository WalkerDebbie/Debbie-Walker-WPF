
 /*
Debbie Walker
Add title
WPF 1411
Add date
 */

//alert("Testing 1,2,3!");

// zombie attack

 //We have a zombie at the school.

 // It can bite 4 pep a day and turn them into zombies by the next day

 //the CDC has asked us how many zombies will there be in 8 days

 var numZombies = 1;//how many do we have?

 var numBites = 4;//number of bites per zombie, per day

 var days = 8;//number of days

 //Every day zombies will bite 4 people and turn them into zombies

 //loop number of days

 for(var i = 1; i <= 8; i++){

   //how many new zombies get made and when do they go bite people
   //add new var
   var newZombies = numZombies * numBites;

   //The bitten people now become zombies
   numZombies = newZombies + numZombies; // numZombies += newZombies;

  console.log("The are now " + numZombies + " zombies on day # " + i + "!");

  if (numZombies < 1000){


  }



 }

 //WHILE LOOPS ARE GOOD  if you don't know how many

 //How many days will it take us to get to 1 million zombies?

 while(numZombies < 100000){
  //how many new zombies get made and when do they go bite pepole.
   var newZombies = newZombies*9;
  console.log("there are now " +newZombies + "zombies on day # " + days + " !");
  days++;


 }