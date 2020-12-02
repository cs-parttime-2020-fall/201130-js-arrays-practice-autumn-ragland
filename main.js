console.log("20 11 30 JS Arrays Practice"); // check that files are linked

// EX 1
let fruitArray = ["apple", "orange", "peach", "pear"]; // declare array
console.log(fruitArray); // output array

// EX 2
let fruitLength = fruitArray.length; // save length in variable
console.log(`There are ${fruitLength} fruits in the array`); // output length
// console.log(`There are ${fruitArray.length} fruits in the array`);

// EX 3

// Prompt the user to guess how many fruits are in the fruit array.
let userGuess = parseInt(prompt("How many fruit are in the fruit array")); 

if(userGuess == fruitArray.length){ //correct guess

    alert("you guessed correctly"); 

} else if(userGuess < fruitArray.length){ // too low

    alert(`You guessed too low. There are actually ${fruitArray.length} in the array`);

} else if(userGuess > fruitArray.length){ // too high

    alert(`You guessed too high. There are actually ${fruitArray.length} in the array`);
}

// Prompt the user to enter a fruit. 
let userFruit = prompt("Enter a fruit");

// Add their fruit to the end of fruitArray. 
fruitArray.push(userFruit);

// Output the fruit added to the end of the array by index position in the formatted message : "The last fruit [LAST_ELEMENT_IN_ARRAY] was added by the user!"
fruitLength = fruitArray.length; // update value of fruitLength
console.log(`The last fruit ${fruitArray[fruitLength - 1]} was added by the user!`);


