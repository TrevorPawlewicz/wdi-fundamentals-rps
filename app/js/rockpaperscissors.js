////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';



function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    var move;
    	if (move != null) {
    		move = move;
    	} else {
		move = getInput();
    	}
    	return move;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    var move;
    	if (move != null) {
    		move = move;
    	} else {
		move = randomPlay();
    	}
    	return move;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on 
    // 	the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    
    if (playerMove === computerMove) {
    		winner = "tie";
    }
    else if (playerMove === "rock") {
    		if (computerMove === "scissors") {
    			winner = "player";
    		} else {
    			winner = "computer"; // paper
    		}
    }
    else if (playerMove === "paper") {
    		if (computerMove === "rock") {
    			winner = "player";
    		} else {
    			winner = "computer"; // scissors
    		}
    }
    else if (playerMove === "scissors") {
    		if (computerMove === "paper") {
    			winner = "player";
    		} else {
    			winner = "computer"; // rock
    		}
    }
    
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var playAgain = "y";
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the 
    // computer has won five times.
    /* YOUR CODE HERE */
    var playerMove;
    var computerMove;
    var currentWinner;
    
    if ((playAgain === "y" || playAgain ==="Y")) {
    
	    while ((playerWins <= 5) || (computerWins <= 5)) {
    
			playerMove = getPlayerMove();
			if (playerMove === null) {
				cancelGame();
				break;
			}
			console.log(playerMove);
			computerMove = getComputerMove();
			console.log(computerMove);
			currentWinner = getWinner(playerMove,computerMove);
		
			if (currentWinner === "player") {
				playerWins += 1;
			} else if (currentWinner === "computer") {
				computerWins += 1;
			}
		
			console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
			console.log("the winner is " + currentWinner);  
			console.log('The score is currently player ' + playerWins + ' to computer ' + computerWins + '\n');
		
			if ((playerWins === 5) || (computerWins === 5)) {
				playAgain = prompt("Game Over. Play again? 'y/n'");
				
				if ((playAgain === "y" || playAgain ==="Y")) {
				     playerWins = 0;
				     computerWins = 0;
				} else {
					break;
				}
	    		}
	    	}
    } else {
    
    		return [playerWins, computerWins];
    	}
}

playToFive();


function cancelGame() {
	alert("End Game Now");
	return 0;
};






















