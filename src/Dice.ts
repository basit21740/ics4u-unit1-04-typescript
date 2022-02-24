/*
 * This is Dice Program
 *
 * @author  Abdul Basit Butt
 * @version 1.0
 * @since   2022-02-19
 */

import promptSync from "prompt-sync"
const prompt = promptSync()

let numberOfGuesses = 0
let guessInput = 0
const randomNumber = Math.floor((Math.random() * 6) + 1)
do {
  const guessInputString = prompt("Guess the number between 1 and 6 (integer): ")
    guessInput = parseInt(guessInputString)
  numberOfGuesses = numberOfGuesses + 1
 
  if (guessInput > randomNumber) {
    console.log("Wrong , You guessed too high, think smaller")
    console.log("Guess again")
  } else if (guessInput < randomNumber) {
    console.log("Wrong , You guessed too low, think bigger")
    console.log("Guess again")
  } else if (isNaN(guessInput) == true) {
    console.log("ERROR: Invalid Input")
  } else {
    console.log("You guessed the right number!")
    console.log("It took you", numberOfGuesses, "guesses.")
    console.log("\nDone.")
  }
} while (guessInput != randomNumber)
 
