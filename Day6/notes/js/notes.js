
/*
 Debbie Walker
 Day 6
 WPF 1411
 11/7/14
 */

//alert("Testing 1,2,3!");

//Nesting IF statements:

//Some decisions depend on other decisions

//If it is warm enough, lets go to the beach, if not let's go to the movies

//Get temp

var temp = 89;

//if else statement


if(temp > 70){
    console.log("");
    if(waterTemp > 75) {
        console.log.("");
    }
} else {
    console.log();
}




if(temp > 70 && waterTemp > 75){
    console.log("Lets go to the beach! \nLet's go swimming.");
}else if(temp > 70 && waterTemp <=75){
    console.log("Let's go the the beach!\n Let's get a tan!");

}else if(temp<=70){
    console.log("Let's go to the movies.");
}

