var input = process.argv[2];

var Letter = function(str){
    this.str = str, 
    this.guessed = false;

    this.letterPrint = function(){
        if(this.guessed){
            // console.log(this.str + " ")
            return this.str;
        }
        else{
            // console.log("_ ")
            return "_";
        }
    }

    this.guessCheck = function(guess){
        if(guess === this.str){
            // console.log("CORRECT!")
            this.guessed = true;  
        }
        else{
            // console.log("INCORRECT!")
        }
        this.letterPrint();
    }
}

// var letter = new Letter("a");

// letter.guessCheck(input);

module.exports = Letter;