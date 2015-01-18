
/*
 Debbie Walker
 Day 6 Loops
 WPF 1411
 11/7/14
 */

//alert("Testing 1,2,3!");


//While loop (used to run if you don't know how many times you want/need to run) -
//number, if you need to code for people to enter a number -
//var i = prompt("Please enter );
//while(i < 10){

//    doSomething(i);

//    i++;
//}

//for loop syntax for(var i = 0; i < 10; i++)

//break will automatically stop where you are and jump  out of the loop
//example: if my random number = 4, then break


//Basic While Loops
//The while loop will loop through a block of code as long as the condition remains true

var counter = 0; //step 1: initialize the counting variable

while(counter < 20){//condition will run as long as this is true

    console.log("Somethings will never end.");
    //console.log("Somethings will never end." + counter) - this consoles line by line

    counter++; //We must update or change the counting variable
}

console.log("End of loop - last counter variable " + counter + ".");

//Do While Loop
//its sort of like while loop
//Difference is, the code will run at LEAST once!

var i = 0; // counter variable

do {
    console.log("The counting number is " + i);
    //Update or change the counting variable!!!!
    i+=5;
}while(i < 50);

//For loop
//syntax  =  for(initializaiton of counter; coniditional to test; increment of change)
//i - stands for iteration (each time around the loop - an iteration)

for(var i = 0; i < 20; i++){//if you change i+=4 it will start with 0 and add in increments of 4 like 4, 8, 16, etc.
    console.log("i = " + i);


//for(var i = 100; i > 10; i-=0){
  //  console.log("i = " + i);
}

//Breaks
//Create a for loop but if counter is 3, I want to stop the loop

for(var j = 0; j < 5; j++ ){
    console.log("j= " +j);
    if(j===3){
        break;//this stops your loop from cycling

    }
}

//kjdhfasfhalhlakdh

var slslsl=slelsejr;


