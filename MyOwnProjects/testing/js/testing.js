/**
 * Created by debbiewalker on 11/17/14.
 */

///*

//Declare and prompt user for balloon size...
var balloonSize = prompt("Enter a balloon size, using numbers in inches.");

//Declare balloon volume function (math: l * w * h):
function balloonVol(){
    var volume = balloonSize * balloonSize * balloonSize;
    //return function...
    return volume;
}
//call function...
var balVol = balloonVol();

//Declaring/validating room measurements...
var length = prompt("Enter the length of your room in feet.");
while(length === "" || isNaN(length)){
    console.log("Please do not leave blank.");
    length = prompt("Enter the length of your room in feet.");
}
var width = prompt("Enter the width of your room in feet.");
while(width === "" || isNaN(width)){
    console.log("Please do not leave blank.");
    width = prompt("Enter the width of your room in feet.");
}
var height = prompt("Enter the height of your room in feet.");
while(height === "" || isNaN(height)){
    console.log("Please do not leave blank.");
    height = prompt("Enter the height of your room in feet.");
}

//Function argument variables converted from feet to inches...
var  lengthConverted = Number(length) * 12;
var  widthConverted  = Number(width) *  12;
var  heightConverted = Number(height) * 12;

//Anonymous function...
var roomVol = function(){
    var volume = (Number(lengthConverted) * Number(widthConverted) * Number(heightConverted));
    return volume;
};
var roomVolTotal = roomVol();

console.log("You entered " + roomVol() + " and " + balloonVol());
alert((roomVol()/balloonVol()));