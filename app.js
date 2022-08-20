let computerScore = 0
let userScore = 0

// get and save computer choice
function getComputerChoice() {
    const arrOfChoice = [ "rock" , "paper" , "scissors" ]
    const randomNumber = Math.floor(Math.random() *arrOfChoice.length)
    const computerChoice = arrOfChoice[randomNumber]
    return computerChoice
}

function playRound (playerSelection , computerSelection){
    
    // tied secenario
    if (playerSelection == 'rock' && computerSelection == 'rock') {
    return 'You tied, you both pick rock'}
    else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
    return 'You tied, you both pick scissors'}
    else if (playerSelection == 'paper' && computerSelection == 'paper') {
    return 'You tied, you both pick paper'}

    //win secenario
    else if (playerSelection == 'rock' && computerSelection == 'scissors'){
        userScore++
        return 'Congratulation you win!!'
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock'){
        userScore++
        return 'Congratulation you win!!'
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        userScore++
        return 'Congratulation you win!!'
    }

    //lose seceneraio
    else if (playerSelection == 'rock' && computerSelection == 'paper'){
        computerScore++
        return 'You lose, better luck next time'
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        computerScore++
        return 'You lose, better luck next time'
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock'){
        computerScore++
        return 'You lose, better luck next time'
    }
}

function game(){
    for (let i = 0; i < 5; i++) {

        //get and save player choice
        const userInput = prompt('Please enter rock, paper, or scissors',)
        const playerSelection = userInput.toLowerCase()

        //keep track of the score
        const computerSelection = getComputerChoice()
        console.log(playRound(playerSelection, computerSelection))
        console.log('Player: ' , userScore , 'Computer: ' , computerScore)
     }
}

game()
