<template>
    <div class="d-flex flex-column align-items-center jusfity-content-center p-3 h-100">
        <div class="modal-header d-flex flex-row w-100">
            <h2 class="display-5 modal-title">Marvel Hangman</h2>
            <button class="ml-auto fa-2x" @click="$emit('close')">
                <i class="fa fa-close" />
            </button>

        </div>
        <div class="modal-body">
            <div v-if="showButton" class="mx-auto">
                <button class="fa-5x mx-auto btn-success px-5" @click="newGame">
                    <i class="fa fa-play-circle" />
                </button>           
            </div>
            <div v-else class="mx-auto fa-5x" :class="[!hideOffScreen ? 'topZero' : 'topMinusNineThousand']">
                <i class="fa fa-cog fa-spin text-primary"></i>
                <p style="font-size:2rem">downloading character information from Marvel Studios. Please be patient...</p>
            </div>
             <div class="row mainCol" :class="[hideOffScreen ? 'topZero' : 'topMinusNineThousand']">
                <div class="col-sm-6">
                    <p>Guess the Marvel comic character name.</p>
                    <p id="instructions" v-if="gameInProgress">Just begin typing your guesses to start.</p><br>
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
                    <button class="btn box-shadow btn-primary" ref="btnReload" @click="resetGame">Reload</button>
                </div>
                <div class="col-sm-6">
                    <figure class="d-table">
                        <img alt="character image" class="rounded align-self-center w-100 h-auto" ref="marvelCharacterImage">
                        <figcaption class="caption align-bottom text-center d-table-caption" ref="marvelCopyright"></figcaption> 
                    </figure>

                </div>
            </div><!-- row -->
        </div><!-- container -->
    </div>
</template>
<script>
import axios from 'axios';
import marvelKeys from './marvelKeys'
import Swal from 'sweetalert2'

export default {
    name: "Marvel",
    data: function(){
        return {
            hash:marvelKeys.hash,
            publickey : marvelKeys.publickey,
            startsWith:'',
            offset:0,
            randomCharacterName:0,
            randomCharacterNameLength:0,
            randomIndex:Math.floor((Math.random() * 20) + 1),
            answerArray : [],
            guessArray: [],
            guessString:'',
            allGuessArray : [],
            incorrectGuessAmt:0,
            guessedLetter:"",
            description:"", 
            wikiURL : "",
            showButton:true,
            hideOffScreen:false,
            gameInProgress:"true", 
        }
    },
    methods:{
        resetGame(){
            this.hideOffScreen = false;
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
            this.newGame();
        },
        newGame(){
            let self = this
            self.gameInProgress = true;
            self.showButton = false
            self.startsWith = this.randomLetter();
            self.offset = this.getOffSet(this.startsWith);
            
            var htmlCall = "http://gateway.marvel.com/v1/public/characters?" + 
                                            "nameStartsWith=" + self.startsWith +
                                        "&offset=" + self.offset +
                                            "&ts=" + 1 +
                                            "&apikey=" + self.publickey + 
                                            "&hash=" + self.hash;

            axios.get(htmlCall)
            .then(function(downloadedJSON) {	
                // filter out the characters that don't have a picture
                const results = downloadedJSON.data.data.results.filter(marvel => marvel.thumbnail.path != "http://i.annihil.us/u/prod/marvel/i/mg/2/70/5239be7020a11" && marvel.thumbnail.path != "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available")
                self.randomIndex = Math.floor((Math.random() * results.length) + 1);
                var characterImage=results[self.randomIndex].thumbnail.path + "/portrait_uncanny.jpg";
                var copyright = downloadedJSON.data.attributionHTML;

                self.hideOffScreen = true;
                self.wikiURL = results[self.randomIndex].urls[0].url;
                self.randomCharacterName = results[self.randomIndex].name;
                self.description = results[self.randomIndex].description || 'no description provided by Marvel API';
                self.answerArray = self.randomCharacterName.split('');
                self.convertToLowerCase(self.answerArray);
                self.setupGuessArray();

                self.$refs.marvelCharacterImage.src=characterImage;
                self.$refs.marvelCharacter.innerHTML = self.guessArray.join('');
                self.$refs.marvelCopyright.innerHTML = copyright;
                self.$refs.description.innerHTML = self.description;
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
                    case ":":
                        temp.push(":");				
                        break;                        
                    case "/":
                        temp.push("/");				
                        break;                        
                    default:
                        temp.push("*");
                        this.randomCharacterNameLength++;
                }

            }
            this.guessArray = temp;
        },
        evaluateGuess(guess){
            let self = this
            var indexOfGuess=this.answerArray.indexOf(guess);

            if (self.randomCharacterNameLength == 0){
                Swal.fire({
                    title: 'Something went wrong... ',
                    text: 'The character info was not downloaded correctly, please try again.',
                    type: 'error',
                    confirmButtonText: 'OK'
                })
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
                            Swal.fire({
                                title: 'You guessed it!',
                                text: this.randomCharacterName,
                                type: 'success',
                                confirmButtonText: 'Cool'
                            })
                            //self.onkeyup = null;	

                            self.$refs.description.innerHTML= this.randomCharacterName;
                            if (this.description != 'no description provided by Marvel API'){
                                self.$refs.description.innerHTML += ": " + this.description;
                            }	
                            else{
                                self.$refs.description.innerHTML += "<a href='" + this.wikiURL + "' target='blank'>" + " (more info)"  +"</a> ";
                            }
                    
                            self.$refs.guessType.innerHTML="";		
                        }
                        self.$refs.marvelCharacter.innerHTML=this.guessArray.join('');
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
            this.$refs.messageboard.innerHTML = message;
        },

        // takes given array and returns as string
        printArray(anArray) {
            var arrayString="";

            for (var i = 0; i < anArray.length; i++) {
                arrayString+=anArray[i];
            }
            return arrayString;
        }, 
        
        keyMonitor: function(event) {
            this.gameInProgress = false;
			if(this.isValidKey(event.key).length == 1 && this.allGuessArray.indexOf(event.key) < 0){    	
                this.evaluateGuess(event.key);
                this.updateMessageBoard();
          }
        }
    },
    mounted() {
        let self = this; 
        window.addEventListener('keyup', function(ev) {
            self.keyMonitor(ev); // declared in your component methods
        });
    }       
}
</script>
<style lang="scss" scoped>
iframe {
    border: 1px solid black;
    width: 85vw;
    height: 60vw;
}
.fa-close {
    font-size: 1.5rem;
}
.container {
    font-size: 2rem;
    width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.modal-header {
    & button {
        border:none;
    }
}
.modal-body {
    position: relative;
    display: flex;
    align-items: center;
    font-size: 2rem;
    text-align: center;
}
.topMinusNineThousand {
    top: -9000px;
    position: absolute;    
}
.topZero {
    margin-top:7rem;
}
.mainCol{
    & button {
        font-size: 2rem;
    }    
}

</style>
