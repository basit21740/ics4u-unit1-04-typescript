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
  var randomNumber = Math.floor((Math.random() * 6) + 1)
  const guessInputString = prompt("Guess the number between 1 and your range (integer): ")
  const guessInput = parseInt(guessInputString, 10)
  numberOfGuesses = numberOfGuesses + 1;
 
   do {
    const guessInputString = prompt("Guess the number between 1 and your range (integer): ")
    const guessInput = parseInt(guessInputString)

  if (guessInput > randomNumber) {
    console.log("Wrong , You guessed too high, think smaller");
    console.log("Guess again")
  } else if (guessInput < randomNumber) {
    console.log("Wrong , You guessed too low, think bigger");
    console.log("Guess again")
  } else {
    console.log("You guessed the right number!")
    console.log("It took you", numberOfGuesses, "guesses.")
  }
} while (guessInput != randomNumber);
