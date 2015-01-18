/*
 Debbie Walker
 Day 5 Worksheet
 WPF 1411
 11/5/14
 */

//alert("Testing to sif if linked!");

//Problem 2 | Do you know your login information?

//Declare variables: prompt user to add username and password...
var username = prompt("What is your username?");
var password = prompt("What is your password?");

if((username === false) && (password === false)){
    alert("Sorry, we don't support hackers.");
    //if username OR password are in incorrect alert user...
}else if((password === password) || (username !== username)){
    alert("Please retry, one of your entries is incorrect.");
//if username AND password are correct then alert user...
}else {
    alert("Welcome back " + username + ", it's good to work with you again.");
}
