
 /*
Debbie Walker
For Loop
WPF 1411
11-11-14
 */

//alert("Testing 1,2,3!");




//For Loop:
 //used when it is unknown in advance how many times the block of code will need to run.

 //SYNTAX: for(var=startValue; var<=endValue; var=var(+ increment):(- decrement)

 //How many monkeys jumping on the bed?

 //Declare variable...
 for(var monkeys = 5; monkeys > 0; monkeys--){

  //print to browser
  console.log(monkeys+ " little monkeys jumping on the bed, one fell off and bumped his head.");
  console.log("Mommy called the doctor and the doctor said, NO LITTLE MONKEYS JUMPING ON THE BED.\n");
  if(monkeys ===0){
   break;//break keeps code from creating an endless loop
  }
 }
  console.log("Just great! Now they're all in the hospital.\nI guess that will teach those damn little monkeys from jumping on the bed!");
