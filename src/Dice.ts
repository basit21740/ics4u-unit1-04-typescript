/*
 * This is Dice Program
 *
 * @author  Abdul Basit Butt
 * @version 1.0
 * @since   2022-02-19
 */

import promptSync from "prompt-sync"
const prompt = promptSync()

var numberOfGuesses = 0

try {
  const rangeInputString = prompt("Enter a maximum range you would like for the dice (integer): ")
  const rangeInput = parseFloat(rangeInputString)

  const randomNumber = Math.floor((Math.random() * (rangeInput - 1)) + 1)
  const guessInputString = prompt("Guess the number between 1 and your range (integer): ")
  const guessInput = parseInt(guessInputString, 10)
  
   numberOfGuesses = numberOfGuesses + 1;

        if (isNaN(guessInput) == true) {
          console.log("ERROR: Invalid Input");
          console.log();
        } else if (guessInput == randomNumber) {
          // Output if user guesses number correctly
          console.log("You guessed the correct number!");
          console.log("It took you", numberOfGuesses, "guesses.");
          console.log();
        } else {
          // Output if user guesses number incorrectly
          console.log("Wrong number, try again!");
          console.log();
}
}finally {
  ("")
}
