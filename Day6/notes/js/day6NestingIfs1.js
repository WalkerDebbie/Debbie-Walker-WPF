
 /*
Dan Williams
Title
WPF 1411
Date
 */

//alert("Testing 1,2,3!");


//Some decisions depend on other decisions

// If it is warm enough lets go to the beach, if not lets go to the movies.
// If the water is warm enough, let's go swimming, if not lets just lay out and get a tan

 //Choose between kids movie or horror - are you taking a child


//Get temp
 var temp = prompt("What's the temperature outside?");

 //Get the water temperature
 var waterTemp = 60;

 //Are you taking a child?
 var child = false;


 // If else statement
 if(temp>70){
     console.log("Let's go the beach!");

     //Test the water temp
     if(waterTemp>75){
         console.log("Let's go swimming in the water!");

         waterTemp = prompt("What is the water temp?");

     } else{
         console.log("Let's layout and get a tan!");
     }

 } else {

     console.log("Let's go to the movies!");

    if(child){
         var childAge = prompt("How old is the child?");
         if(childAge <+5){
             console.log("Let's see the Smurf movie.");
         } else {
             console.log("Go see Indian Jones.");
         }

         console.log("Go see an animated feature!");

     }else{
         console.log("Bring the blood! It's time for horror!!");
     }

 }



 // using && and || or

 if(temp>70 && waterTemp>75){
     console.log("Let's go to the beach!\nLet's go swimming");

  }else if(temp>70 && waterTemp<=75){
     console.log("Let's go the beach! \nLet's get a tan!");

 }else if(temp<=70 && child){
     console.log("Let's go to the movies!\nLet's see a animated movie!");

 }else if(temp<=70 && !child){
     console.log("Let's go to the movies!\nLet's see a horror movie!");

 }




