
/*
 Debbie Walker
 Wacky
 WPF 1411
 11/3/14
 */

//alert("Testing 1,2,3!");

/*
PREFACE
Connor is a 6 year old Golden Retriever who manages his own retirement portfolio. (How old is he in human years?
//How old will he need to be to retire?)
For years he worked in a "$1 a pet" donation model, but soon became disgruntled when sniffing became "non-PC."
Three years ago during a walk Connor's pet, Debbie, found a winning scratch-off ticket worth $100.00.
Connor was hooked; from there he decided to start taking a $1 a week to buy one scratch-off ticket from Publix,
//which happens to have the extra bonus of smelling delicious food.
Connor plans to use his winnings to secure his retirement plan, and help Deb with her student loans.
So far over the past 3 years Connor has an ROI of 10%.
*/


//Set up story by alerting the user:
alert('WARNING: By clicking "OK," you agreeing to help Connor (the dog) throughout the duration of this problem, ' +
'which includes (but is not limited to) NOT telling Debbie that Connor is on her computer - again.');
//Declare variables:
var userName = prompt("Please enter your fist name.");
//Alert user:
alert("Good, and thank you " + userName + ". Now for introductions...");
alert("I'm Connor (Debbie Walker's dog), and I'm delighted to get your help, err I mean, meet you.");
alert("You see, I have this...thing. When Debbie leaves out for college, I sneak off to Publix to purchase scratch-off tickets.");
alert("Okay that might seem funny to you (I'll give you that), but I have retirement to think about.");

//Declare and prompt user to input:
var age = prompt(userName + " imagine for a moment how old you will have to be in order to collect Social Security. " +
"Now enter that age and I'll post how old I will be!");
//print the result...
console.log(userName + " you'll only be " + age + ", but in dog years I would be " + (age * 7) + " years old (Y I K E S!)" +
"\n\nI hope that makes you feel better about your age " + userName + ".\n\n");

//Dialog with user by using alters:
alert("As you can see " + userName + ", I really don't have much time to save for retirement, " +
"so I really appreciate any help you can give me.");
alert("Especially since Publix sells the tickets right up by the bakery. \n\nLet's just say I have better odds with scratch-offs than " +
"I do forgetting to buy a ticket altogether - SQUIRREL!");

//Declare variables:
var ticketPrice = 2.00;
//Prompt user:
var donation = prompt("At this time, I'm asking for donations in order to be able to meet my goals. " + userName +
" would like to make a small contribution? (Don't forget " + userName + ", you did click \"OK\" at the first alert prompt). " +
"Please enter your contribution below (hint: scratch-off tickets start at $" + ticketPrice +".");
//Alert user:
alert("Thanks " + userName + ", your contribution is being processed.");

//Declare variable:
var games = ["Puppy Power", "Scratch-N-Sniff", "Pick-A-Tic"];//array
//Prompt user to input data:
var scratchOff = prompt("Now " + userName + ", I hope you're feeling LUCKY, because I need you to choose a scratch-off ticket for me. " +
"This helps me increase the odds of making a faster purchase and reduces the odds that I'll have another SQUIRREL! " +
"moment where I forget to \nbuy a ticket - again." +
" Your choices are: "
+ games[0] + ", \n" + games[1] + ", and " + games[2]);//calls the array units
//Alert user:
alert("Thanks again " + userName + ", I'll get back to you in a bit to let you know how " + scratchOff + " plays out!");


//Declare equation: donation / ticketPrice = x
var ownMoney = 20.00;
var ticketPurchase = (ownMoney + parseInt(donation));
var ticketQnty = ticketPurchase/ticketPrice;

alert(userName + " thanks for all your help. To increase my odds I took $" + ownMoney + " " +
"of my own money and added it to your $" + donation + " was able to purchase " + Math.floor(ticketQnty) + " scratch-off tickets, and you're " +
"not going to believe this, " + scratchOff + " hit the BIG one! \n\n" + userName + ", it's worth $20,000,000!!!!");
//Alert to user:
alert("So " + userName + ", since you helped me so much, I thought the least I could do is return your generous donation " +
"amount of $" + donation + " back to you.");

var accountNo = prompt("Just kidding " + userName + "! Enter your account number and I'll deposit $10,000.00, today!");
//Print:
console.log("Dear " + userName + " thank you so much for picking the scratch-off, " + scratchOff + ", and for making a " +
" generous donation of $" + donation + ". There has been $10,000.00 donated to your" +
" account #" + accountNo + ". \n\nThank you so much! - Connor." );

/*There may not have been as much math, but I did figure out Math.floor, called units from an array and figured out how
to use them so that they would show up correctly in the prompt. I also used the parseInt. The darn story just didn't
lean itself to other operators, but I'll expand on those with this story in the functions and loops.
 */
