let computerScore = 0
let userScore = 0

    // get and save computer choice
    function getComputerChoice() {
        const arrOfChoice = [ "✊" , "✋" , "✌" ]
        const randomNumber = Math.floor(Math.random() *arrOfChoice.length)
        const computerChoice = arrOfChoice[randomNumber]
        return computerChoice
    }

    function playRound (playerSelection , computerSelection){
    
        // tied secenario
        if (playerSelection == '✊' && computerSelection == '✊') {
        return 'You Tied, You Both Pick Paper'}
        else if (playerSelection == '✌' && computerSelection == '✌') {
        return 'You Tied, You Both Pick Paper'}
        else if (playerSelection == '✋' && computerSelection == '✋') {
        return 'You Tied, You Both Pick Paper'}
    
        //win secenario
        else if (playerSelection == '✊' && computerSelection == '✌'){
            userScore++
            return 'Congratulation You Win!!'
        }
        else if (playerSelection == '✋' && computerSelection == '✊'){
            userScore++
            return 'Congratulation You Win!!'
        }
        else if (playerSelection == '✌' && computerSelection == '✋'){
            userScore++
            return 'Congratulation You Win!!'
        }
    
        //lose seceneraio
        else if (playerSelection == '✊' && computerSelection == '✋'){
            computerScore++
            return 'You Lose, Better Luck Next Time'
        }
        else if (playerSelection == '✋' && computerSelection == '✌'){
            computerScore++
            return 'You Lose, Better Luck Next Time'
        }
        else if (playerSelection == '✌' && computerSelection == '✊'){
            computerScore++
            return 'You Lose, Better Luck Next Time'
        }
    }


    const button = document.querySelectorAll('button')
    button.forEach(button => button.addEventListener('click' , e =>{
        const userSelection = button.innerText;
        console.log(userSelection);
        const computerSelection = getComputerChoice();
        console.log(computerSelection);

        const currentUserScore = document.getElementById('yourScore')
        const currentComputerScore = document.getElementById('computerScore')

        const saveResult = playRound(userSelection , computerSelection)

        currentUserScore.textContent = userScore;
        currentComputerScore.textContent = computerScore;

        console.log("C: " + computerScore)
        console.log("U: " + userScore)

        const showResult = document.getElementById('result')
        showResult.textContent = saveResult

        const showPlayerChoice = document.getElementById('playerChoice')
        const showComputerChoice = document.getElementById('computerChoice')

        showPlayerChoice.textContent = userSelection
        showComputerChoice.textContent = computerSelection
    
    }))