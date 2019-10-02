<template>
    <div class="d-flex flex-column align-items-center jusfity-content-center p-3">
        <button class="ml-auto" @click="newGame">
            <i class="fa fa-play-circle" />
        </button>
        <button class="ml-auto" @click="$emit('close')">
            <i class="fa fa-close" />
        </button>
        <div class="container" style="width: 100%">
            <div class="row">
                <div class="col-sm-6 pull-left">
                <div class="container text-dark">
                    <p>Guess the Marvel comic character name.</p>
                    <p id="instructions">Just begin typing your guesses to start.</p><br>
                    <div ref="guessType">
                    Current Guess:
                    </div>
                    <div class="text-center" ref="marvelCharacter">
                    loading...
                    </div>
                    <div ref="description">
                    if nothing loads, Marvel server may be busy. Try again.
                    </div>
                    <hr>
                    <div ref="messageboard"></div>
                    <hr>
                    <button class="btn box-shadow btn-primary" ref="btnReload">Reload</button>
                </div>
                </div>
                <div class="col-sm-6">
                <figure>
                    <img alt="character image" class="figure-img img-fluid rounded text-center d-block" ref="marvelCharacterImage">
                    <figcaption class="figure-caption align-bottom text-center" ref="marvelCopyright"></figcaption>
                </figure>
                </div>
            </div><!-- row -->
            </div><!-- container -->
        </div>
</template>
<script>
import axios from 'axios';

export default {
    name: "Marvel",
    data: function(){
        return {
            hash:"5545b6f2f668966888319100a93d32c5",
            publickey : "8a10078d47a38b6a5c7272b337efb398",
            startsWith:'',
            offset:0,
            randomCharacterName:0,
            randomCharacterNameLength:0,
            randomIndex:Math.floor((Math.random() * 20) + 1),
            answerArray : [],
            guessArray: [],
            allGuessArray : [],
            incorrectGuessAmt:0,
            guessedLetter:"",
            description:"", 
            wikiURL : "",            
        }
    },
    methods:{
        resetGame(){
            this.$refs.messageboard.innerHTML = "";
            this.randomCharacterName=0;
            this.randomCharacterNameLength=0;
            this.randomIndex=Math.floor((Math.random() * 20) + 1);
            this.answerArray=[],
            this.guessArray=[],
            this.allGuessArray = [];
            this.incorrectGuessAmt=0;
            this.guessedLetter="";
            this.description=""; 
            this.wikiURL = "";	
        },
        newGame(){
            let self = this
            self.startsWith = this.randomLetter();
            self.offset = this.getOffSet(this.startsWith);
            self.randomIndex = Math.floor((Math.random() * 20) + 1);
            var htmlCall = "http://gateway.marvel.com/v1/public/characters?" + 
                                            "nameStartsWith=" + self.startsWith +
                                        "&offset=" + self.offset +
                                            "&ts=" + 1 +
                                            "&apikey=" + self.publickey + 
                                            "&hash=" + self.hash;

            axios.get(htmlCall)
            .then(function(dowloadedJSON) {	
                const results = dowloadedJSON.data.data.results
                var characterImage=results[self.randomIndex].thumbnail.path + "/portrait_uncanny.jpg";
                var copyright = results.attributionHTML;

                self.wikiURL = results[self.randomIndex].urls[0].url;
                self.randomCharacterName = results[self.randomIndex].name;
                self.description = results[self.randomIndex].description || 'no description provided by Marvel API';
                self.answerArray = self.randomCharacterName.split('');
                self.convertToLowerCase(self.answerArray);
                self.setupGuessArray();

                self.$refs.marvelCharacterImage.src=characterImage;
                self.$refs.marvelCharacter.innerHTML = self.printArray(self.guessArray);
                self.$refs.marvelCopyright.innerHTML = copyright;
                self.$refs.description.innerHTML = self.description;

                    // document.onkeyup = function(event) {
                    //     //if key pressed is valid and not already in the all guessed array
                    //         if(this.isValidKey(event.key) && allGuessArray.indexOf(event.key) < 0){    	
                    //     this.evaluateGuess(event.key);
                    //     this.updateMessageBoard();
                    //     }
                    //     document.getElementById("instructions").style.display = "none";
                    // };
                });	
        },
        isValidKey(str) {
            return str.length === 1 && str.match(/[0-9a-z]/i);
        },

        randomLetter() {
            var text = "";
            var possible = "abcdefghijklmnopqrstuvwxyz";

                text += possible.charAt(Math.floor(Math.random() * possible.length));

            return text;
        },

        getOffSet(letter){
            var maxReturnedCharacters = 20;

                switch(letter){
                case 'a':
                    return Math.floor((Math.random() * (79-maxReturnedCharacters)));
                    break;
                case 'b':
                    return Math.floor((Math.random() * (92-maxReturnedCharacters)));
                    break;
                case 'c':
                    return Math.floor((Math.random() * (100-maxReturnedCharacters)));
                    break;
                case 'd':
                    return Math.floor((Math.random() * (78-maxReturnedCharacters)));
                    break;
                case 'e':
                    return Math.floor((Math.random() * (33-maxReturnedCharacters)));
                    break;
                case 'f':
                    return Math.floor((Math.random() * (37-maxReturnedCharacters)));
                    break;
                case 'g':
                    return Math.floor((Math.random() * (56-maxReturnedCharacters)));
                    break;
                case 'h':
                    return Math.floor((Math.random() * (70-maxReturnedCharacters)));
                    break;
                case 'i':
                    return Math.floor((Math.random() * (38-maxReturnedCharacters)));
                    break;
                case 'j':
                    return Math.floor((Math.random() * (44-maxReturnedCharacters)));
                    break;
                case 'k':
                    return Math.floor((Math.random() * (34-maxReturnedCharacters)));
                    break;
                case 'l':
                    return Math.floor((Math.random() * (54-maxReturnedCharacters)));
                    break;
                case 'm':
                    return Math.floor((Math.random() * (152-maxReturnedCharacters)));
                    break;
                case 'n':
                    return Math.floor((Math.random() * (43-maxReturnedCharacters)));
                    break;
                case 'o':
                    return 0; //only 19 characters no offset needed
                    break;
                case 'p':
                    return Math.floor((Math.random() * (61-maxReturnedCharacters)));
                    break;
                case 'q':
                    return 0; // only 8 characters no offset needed
                    break
                case 'r':
                    return Math.floor((Math.random() * (59-maxReturnedCharacters)));
                    break;
                case 's':
                    return Math.floor((Math.random() * (196-maxReturnedCharacters)));
                    break;
                case 't':
                    return Math.floor((Math.random() * (92-maxReturnedCharacters)));
                    break;
                case 'u':
                    return Math.floor((Math.random() * (21-maxReturnedCharacters)));
                    break;
                case 'v':
                    return Math.floor((Math.random() * (32-maxReturnedCharacters)));
                    break;
                case 'w':
                    return Math.floor((Math.random() * (57-maxReturnedCharacters)));
                    break;
                case 'x':
                    return 0; //only 15 characters no offset needed
                    break;
                case 'y':
                    return 0; // only 4 characters no offset needed
                    break
                case 'z':
                    return 0; // only 10 characters no offset needed
                    break			
                default	:
                    break;
                }
        },

        setupGuessArray() {
            // push * as placeholders for letters and numbers. Fill in common characters (spaces, periods, parenthesis etc)
            // so players do not need to guess those
            var temp = [];
            for (var i = 0; i < this.answerArray.length; i++) {
                switch (this.answerArray[i]){
                    case " ":
                        temp.push(" ");
                        break;
                    case "(":
                        temp.push("(");
                        break;
                    case ")":
                        temp.push(")");
                        break;
                    case "'":
                        temp.push("'");
                        break;
                    case ".":
                        temp.push(".");				
                        break;				
                    case "-":
                        temp.push("-");				
                        break;				
                    default:
                        temp.push("*");
                        this.randomCharacterNameLength++;
                }

            }
            this.guessArray = temp;
        },

        evaluateGuess(guess){
            var indexOfGuess=this.answerArray.indexOf(guess);

            if (this.randomCharacterNameLength == 0){
                alert ("name guessed!")
                document.onkeyup = null;
            } 
            else{
                if (indexOfGuess>=0){
                    // fill all array elements with the guessed letter
                    for(var i=0; i<this.answerArray.length;i++) {
                    if (this.answerArray[i] == guess) {
                        this.guessArray[i] = guess;
                        this.randomCharacterNameLength--;
                    }

                    }
                    if (this.randomCharacterNameLength == 0){
                            alert ("name guessed!")
                            document.onkeyup = null;	

                            document.getElementById("description").innerHTML= this.randomCharacterName;
                            if (this.description){
                                document.getElementById("description").innerHTML += ": " + this.description;
                            }	
                            else{
                                document.getElementById("description").innerHTML += "<a href='" + this.wikiURL + "' target='blank'>" + " (more info)"  +"</a> ";
                            }
                    
                            document.getElementById('guessType').innerHTML="";		
                        }
                        document.getElementById("marvelCharacter").innerHTML=printArray(this.guessArray);
                } else{
                    // only update incorrect guess amount for new guesses
                    if (this.allGuessArray.indexOf(guess)<=0 ){
                        this.incorrectGuessAmt++;
                    }
                }

                if (this.allGuessArray.indexOf(guess)<0){
                    this.allGuessArray.push(guess);
                }
            }
        },

        convertToLowerCase(anArray){
            for (var i = 0; i < anArray.length; i++) {
                anArray[i] = anArray[i].toLowerCase();
            }
        },

        // updates incorrect guessed amount and all letters chosen so far
        updateMessageBoard(){
            var message="";
            message += "<p> Incorrect guessed amount: " + this.incorrectGuessAmt + "<br>";
            message += "All guessed letters: " + this.allGuessArray.toString() + "<br></p>";
            document.getElementById("messageboard").innerHTML = message;
        },

        // takes given array and returns as string
        printArray(anArray) {
            var arrayString="";

            for (var i = 0; i < anArray.length; i++) {
                arrayString+=anArray[i];
            }
            return arrayString;
        }        
    }    
}
</script>
<style>
iframe {
    border: 1px solid black;
    width: 85vw;
    height: 60vw;
}
.fa-close {
    font-size: 1.5rem;
}
</style>
