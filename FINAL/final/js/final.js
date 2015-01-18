
 /*
Debbie Walker
Final Exam WPF//#3
WPF 1411
11-19-14 */

//alert("Testing 1,2,3!");


//Declare and assign values by prompting the user to enter a data string.
 var userName = prompt("Please enter your name.");

 while(userName === ""){
      console.log("Please enter your name and do not leave blank.");
      userName = prompt("Please enter your name.");
 }

 //Declare and assign values by prompting the user to enter a data number.

 var cost = prompt("Enter the cost of the item.");//a

 while(cost === "" || isNaN(cost)){//b, c
      console.log("Please enter a number and do not leave blank.");
      cost = prompt("Enter the cost of the item.");
 }

 var discount = prompt("Enter the discount percent.");

 if(discount > 100){
     prompt("The discount cannot be more than 100% of the value, or it would be free.\nPlease re-enter the discount percentage.");
 }

 while(cost === "" || isNaN(cost)) {//b, c
     console.log("Please enter a number and do not leave blank.");
     cost = prompt("Enter the cost of the item.");
    }



 var totalPrice = discountCost(cost, discount);
 console.log("Hi " + userName + ", it looks like the original price was: " + Number(cost) + ", but with today's Black Friday discount of " + Number(discount).toFixed() + "%, you'll only have to pay $" + parseInt(Number(discountCost(cost, discount))) + ".\n\nThanks for shopping with us, have a happy holiday.");


 function discountCost(cost, discount) {
   var discountPrice = (100 - discount)/100 * cost;
   return discountPrice;
  }

