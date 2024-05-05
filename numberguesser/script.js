let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random()* 10);

const getAbsoluteDistance = (a, b) => Math.abs(a - b);

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
    if (humanGuess > 10) {
        alert("Chose a number between 0 and 10!");
    }
    if ((getAbsoluteDistance(humanGuess, targetNumber)) <= (getAbsoluteDistance(computerGuess, targetNumber))) {
        return true;
    } else {
        return false;
    }
}


const checkNumber = () => {
    
}

const updateScore = winner => {
    if (winner === "human") {
        humanScore += 1;
    } else if (winner === "computer") {
        computerScore += 1;
    } else {
        console.log("Error!");
    }
}


const advanceRound = () => currentRoundNumber += 1;



