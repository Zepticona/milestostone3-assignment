/*
===============================================
Feet to Mile Converter
===============================================
*/
function feetToMile(feet) {
    if(feet<0) {
        return "Invalid input. Plese "
    } else {
        return feet/5280;
    }
}
//Testing the function
var mileFromFeet = feetToMile(312312);
console.log(mileFromFeet, "miles.");



/*
===============================================
Wood Calculator
===============================================
*/
function woodCalculator(chair, table, bed) {

    if(chair < 0 || table <0 || bed < 0) {

        return "Please enter a valid number of furnitures.";
        
    }
    return (chair*1) + (table*3) + (bed*5);
}
//Testing the function
var totalWood = woodCalculator(8, 2, 0);
console.log('Total number of woods required: ',totalWood);



/*
===============================================
Brick Calculator
===============================================
*/
function brickCalculator(numberOfFloors){

    if(numberOfFloors <= 0 ) {

        return "Please Enter a Valid Floor Number.";

    } else if(numberOfFloors > 0 && numberOfFloors <= 10) {

        return 1000*(numberOfFloors*15);

    } else if(numberOfFloors > 10 && numberOfFloors <= 20){

        return 1000*((10*15)+(numberOfFloors-10)*12);

    } else {

        return 1000*((10*15)+(10*12)+(numberOfFloors-20)*10);

    }

}
//Testing the function
var totalBricks= brickCalculator(21);
console.log("Total bricks required = ",totalBricks);


/*
===============================================
Fidning the Smallest Name
===============================================
*/

// Declare the global variables and the empty array (to store names)
var currentMin, smallestNames=[];

function tinyFriend(names) {
    
    // Declare a large number to start testing against
    currentMin = 2000;

    // Iterate over Each Name(array element)
    for(i = 0;i<names.length;i++){

        if(names[i].trim().length == 0) {
            // Elements with no strings will be skipped.
        } else if(names[i].trim().length < currentMin) {

            currentMin = names[i].trim().length;
            smallestNames = [];
            smallestNames.push(names[i].trim());

        } else if(names[i].trim().length == currentMin) {

            smallestNames.push(names[i].trim());

        }
    }

    // Return the array containing the name(s) list.
    return smallestNames;
}
//Testing the function
var smallestNamesList = tinyFriend(['Karim', 'Rahim', 'Jeem', 'Mim', '', '   PK']);
console.log('List of the smallest name(s) : ', smallestNamesList);
