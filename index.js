var inquirer = require("inquirer");
var Word = require("./Word.js")

var wordGuesses = ["life", "death", "hello"];
var guessedLetters = [];

//empty global variables to be utilized
var random;
var challengeWord;
var guesses = 6;

console.log("#############################################")
console.log("Welcome to the game! Let's see how you fare...")

function game(){

    //generate a random index out of the choices
    random = Math.round(Math.random() * wordGuesses.length)

    console.log("\nYour word has " + wordGuesses[random].length + " letters.\n")

    //create a new word object from the constructor class
    challengeWord = new Word(wordGuesses[random]);

    inquirer
    .prompt([
        //ask user to guess letter
        {
          type: "input",
          message: "Guess a letter!",
          name: "guess"
        }
    ])
    .then(function(res) {
        guessedLetters.push(res.choice);
        challengeWord.wordGuess(res.choice);
        guesses--;
        guesser();
    });
}

function guesser(){
    inquirer
    .prompt([
        //ask user to guess letter
        {
          type: "input",
          message: "Guess a letter!",
          name: "guess"
        }
    ])
    .then(function(res) {
        if(guesses > 0){
            guessedLetters.push(res.choice);
            challengeWord.wordGuess(res.choice);
            guesses--;
            guesser();  
        }
        else{
            console.log("Out of Guesses!!!")
        }
    });
}

game();