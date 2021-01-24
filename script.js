let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// Step3
const generateTarget = () => {
    const randomInt = Math.floor(Math.random() * 10);
    return randomInt;
}
// Step4
const compareGuesses = (currentHumanGuess,computerGuess,generateTarget) => {
// console.log(generateTarget);
// console.log(Math.abs(currentHumanGuess-generateTarget));
// console.log(Math.abs(generateTarget-computerGuess));
     
if (Math.abs(currentHumanGuess-generateTarget)<=Math.abs(generateTarget-computerGuess)){
   return true;
}else{
    return false;
}
}
// step5
const updateScore = (winner) => {
  
    if (winner === 'human'){
        humanScore += 1;
    }
    else if (winner === 'computer') {
        computerScore +=1;
    }
}

// step 6
const advanceRound = () =>{
    currentRoundNumber = currentRoundNumber + 1;
}
// Step 8
