var inquirer = require("inquirer");
var Word = require("./Word.js")

//placeholder list of words - can import from elsewhere in the future
var wordGuesses = ["train", "subway", "jester", "awkward", "gazebo", "oxygen", "sphinx", "zombie", "volcano", "programmer"];

var guessedLetters = [];

//empty global variables to be utilized
var random;
var challengeWord;
var guesses = 8;
var wins = 0;

console.log("#############################################")
console.log("Welcome to the game! Let's see how you fare...")

function game(){

    //generate a random index out of the choices
    random = Math.floor(Math.random() * wordGuesses.length)

    console.log("\nYour word has " + wordGuesses[random].length + " letters. You have " + guesses + " guesses to get it!\n")

    //create a new word object from the constructor class
    challengeWord = new Word(wordGuesses[random]);

    challengeWord.wordGenerator();
    console.log("\n")

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
        guessedLetters.push(res.guess);
        challengeWord.wordGuess(res.guess);
        console.log("\n")
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
            guessedLetters.push(res.guess);
            challengeWord.wordGuess(res.guess);
            console.log("\n")
            guesses--;

            //checks if the current status of the word is correct
            if(challengeWord.wordRepresentation.join("") === challengeWord.word.join("")){
                wins++;
                console.log("YOU GOT IT!\n")
                console.log(`############
#          #
#  ${"WINS: " + wins} #
#          #
############`)
                console.log("\n")
                playAgain();
            }
            else{
                guesser();  
            }
              
        }
        else{
            console.log("NOPE! Out of Guesses!!!");
            playAgain();
        }
    });
}

function playAgain(){
    inquirer
    .prompt([
        //ask user to guess letter
        {
          type: "confirm",
          message: "Want to play again?",
          name: "confirm",
          default: true
        }
    ])
    .then(function(res) {
        if(res.confirm){
            //splices out the word you just attempted to guess
            wordGuesses.splice(random);
            guesses = 6;
            game();  
        }
        else{
            console.log("GOOD GAME.")
        }
    });
}

game();

