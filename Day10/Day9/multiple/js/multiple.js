
 /*
Debbie Walker
Multiple Functions - combining
WPF 1411
11-14-14 */

//alert("Testing 1,2,3!");

 //Figure out how much pizza costs per sq inch and how much per slice...

 //what do we need from user?
 //radius of pizza
 //cost of pizza
 //# of slice of pizza

 var pizzaRadius = prompt("What is the radius of your pizza?");
 var pizzaCost = prompt("How much does your pizza cost in total?");
 var pizzaSlices = prompt("How many slices are in your pizza?");


 var results =  lordFunction(pizzaRadius, pizzaCost, pizzaSlices);

 console.log("Your pizza will cost " + results[0] + " per sq inch or $" + results +" per slice.");



 //Create a function to start all other functions

function lordFunction(radius, cost, slices){
 //function call the other 3 functions and then return the values
 var area = pizzaArea(radius);
 var areaCost = pizzaSqInCost(area,cost);
 var slicePrice = pricePerSlice(slices, cost);

 return [areaCost, slicePrice];

}

 //Function that calcs of the are of the pizza
 //Function that calcs the price per sq in
 //Function that calcs the price per slice

 function pizzaArea(radius){

  var area = radius * radius* Math.PI;

  return area;

 }

 function pizzaSqInCost(area, price){

  var costPerIn  = price/area;

  //round to 2 decimals
  costPerIn = costPerIn.toFixed(2);

  return costPerIn;

 }

 function pricePerSlice(slices, price){

  var costPerSlice = price/slices;

  return costPerSlice;

 }

