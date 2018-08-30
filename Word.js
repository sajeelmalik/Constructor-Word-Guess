var Letter = require("./Letter.js")

var Word = function(word){
    this.word = word,

    //an array of letter objects
    this.letters = [],

    this.wordRepresentation = [];

    // console.log(this.word)
    // console.log(this.word.length)

    this.wordGenerator = function(){

        for(var i = 0; i < this.word.length; i++){
            var letter = new Letter(this.word[i]);
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
// var word = new Word("hello");
// word.wordGenerator();
// word.wordGuess("e");