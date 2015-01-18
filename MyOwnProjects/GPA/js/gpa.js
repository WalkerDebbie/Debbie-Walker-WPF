/**
 * Created by debbiewalker on 11/13/14.
 */

//This is a code to calculate my gpa


//first I declared an array to hold all my grades
//I can push new grades in, as I get them
var gpaArray = [99, 100, 98.5, 95, 98];

//this is code I found on www.stackoverflow.com
//cite: http://stackoverflow.com/questions/1230233/how-to-go-through-an-array-and-add-their-values
//credit to: Forian Margaine
//code adds up the array
var gpa = gpaArray.reduce(add, 0);


//this is the function that allows the array to add
function add(a, b) {
    return a + b;
}

//this prints the average gpa rounded down
console.log(Math.floor(gpa / gpaArray.length));


