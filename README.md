# Constructor Word Guess

A node.js Word Guess Game! Try your best to guess the challenge words, but be wary, you only have 8 guesses to get them!

* Powered by Javascript and node.js.

## Getting Started and Prerequisites

Clone the repo and download [*node.js*](https://nodejs.org/en/) to get started!

### Preview 
<!-- take a picture of the image and add it into the readme  -->
![Constructor Word Guess](public/assets/preview.PNG  "Constructor Word Guess")

## Technology Used

* **Javascript** - the primary scripting logic powering the game
* [**node.js**](https://nodejs.org/en/) - a versatile Javascript runtime environment that processes user inputs in terminal

# Code Snippets
<!-- put snippets of code inside ``` ``` so it will look like code -->
<!-- if you want to put blockquotes use a > -->

Constructors provide a more wholesome data-structure to store complex data that require a multitide of defining attributes. In this case, I created a Letter and a Word constructor to parse through an input string and generate outputs that dynamically adjust to the user's inputs. Later, the inquirer can ask the user for their guesses and adjust the Word object accordingly.

```
var Letter = require("./Letter.js")

var Word = function(word){
    this.word = word.split(""),

    //an array of letter objects
    this.letters = [],
    
    //an array of letter representations, as the letter or as "_"
    this.wordRepresentation = [];

    this.wordGenerator = function(){

        for(var i = 0; i < word.length; i++){
            var letter = new Letter(word[i]);
            this.letters.push(letter);
            this.wordRepresentation.push(letter.letterPrint());
        }
        
        console.log(this.wordRepresentation.join(" "))
    }

    this.wordGuess = function(guess){
        for(var i = 0; i < this.letters.length; i++){
            this.letters[i].guessCheck(guess);
            this.wordRepresentation[i] = this.letters[i].letterPrint();
        }
        console.log(this.wordRepresentation.join(" "))
    }
}

module.exports = Word;

```

# Learning Points
<!-- Learning points where you would write what you thought was helpful -->
* Constructors simplified much of the game's core logic from the previous Word Guess Game that I attempted client-side. The internal organization and versatility of these objects are aspects to investigate further.
* .join() was very useful in returning strings from arrays, especially since, strangely, two equivalent arrays were not considered equal during preliminary testing.
 - Consider the following 
   - [ 'h', 'e', 'l', 'l', 'o' ] 
   - [ 'h', 'e', 'l', 'l', 'o' ]

    In the process of developing the game, a general logical strategy to check if the user had correctly guessed the word was to assess the equivalence of **an array of their guesses** with **an array of the letters of the correct word**. Unfortunately, this did not pan out since the two arrays above were *always* unequal and returned **false**. Further investigation of array manipulation in Javascript should be pursued.


## Authors

* **Sajeel Malik** - *Initial work* - [GitHub](https://github.com/sajeelmalik)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
