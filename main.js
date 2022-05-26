const choices = ["rock","paper", "scissors"];
const winners = [];

    //play the game
    //play five rounds
    //console based
function game() {
    for(let i = 0; i <= 5; i++) {
        playRound(i);
    }
    document.querySelector("button").textContent = "Play New Game";
    logWins();
}

function playRound(round) {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice ();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round)

}
 //get input from player
function playerChoice() {
   let input = prompt('Type Rock, Paper, or Scissors');//this will make browser show up with pop-up
   while(input == null){
       input = prompt('Type Rock, Paper, or Scissors');//to avoid null from being read as lowecase and breaking code
   }
   input = input.toLowerCase(); //capitalization input doesn't matter
   let check = validateInput(input) //checks that input is r, p, s (check function below)
   while(check == false) {
       input = prompt("Type Rock, Paper or Scissors. Spelling needs to be exact for this to work. Capitalizaion insensitive");
       while(input == null){
        input = prompt('Type Rock, Paper, or Scissors');
       }
       input = input.toLowerCase();
       check = validateInput(input);//this makes sure our input choices are true
   }
   return input;
}

function computerChoice() {
    return choices[Math.floor(Math.random()*choices.length)] //get random input for computer
}

//a function that checks that input is only 1 of the 3 choices provided 
function validateInput(choice){
    return choices.includes(choice);
}
//function to show what happens if human or computer wins./ choiceP = Person choiceC = computer
function checkWinner(choiceP, choiceC){
    if(choiceP === choiceC){
        return 'Tie';
    } else if(
        (choiceP === "rock" && choiceC == "scissors") || 
        (choiceP === "paper" && choiceC == "rock") ||
        (choiceP === "scissors" && choiceC == "paper")
        ){
        return 'Player';
    } else{
        return 'Computer'
    }
}

function logWins(){
    let playerWins = winners.filter((item) => item =="Player");
    let computerWins = winners.filter((item) => item == "Computer");
    let ties = winners.filter((item) => item == "Tie");
    console.log("Results:");
    console.log("Player Wins:", playerWins);
    console.log("Computer Wins:", computerWins);
    console.log("Ties", ties);
}
function logRound(playerChoice, computerChoice, winner, round){
    console.log('Round:', round)
    console.log('Player Chose:', playerChoice)
    console.log('Computer Chose:', computerChoice)
    console.log(winner, 'Won the Round')
    console.log("------------------------")
}

