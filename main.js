// console.log("20 11 30 JS Arrays Practice"); // check that files are linked

// EX 1 : declare array with fruit strings
let fruitArray = ["apple", "orange", "peach", "pear"]; // declare array
console.log(fruitArray); // output to browser

// EX 2 : output array length
let fruitLength = fruitArray.length; // determine length
console.log(`There are ${fruitArray.length} fruits in the array`); // output message 

// EX 3 : prompt user to guess length
let userGuess = parseInt(prompt("How many items are in the fruit array")); // prompt user
if(userGuess == fruitArray.length){ // correct guess
    alert("You guessed correctly");
} else if(userGuess < fruitLength){ // guess too low
    alert(`You guessed too low. There are actually ${fruitArray.length} fruits in the array`);
} else if(userGuess > fruitLength) { // guess to high
    alert(`You guessed too high. There are actually ${fruitLength} fruits in the array`);
}

// EX 4 : add fruit and output last fruit
let userFruit = prompt("Enter a fruit!"); // prompt user
fruitArray.push(userFruit); // add user fruit
console.log(`The last fruit ${fruitArray[fruitArray.length - 1]} was added by the user`); // output last element
