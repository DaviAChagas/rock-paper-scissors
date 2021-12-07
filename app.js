let numberUserWon = 0
let numberComputerWon = 0

playRound = (playerSelection, computerSelection) => {

    if ((playerSelection === 'rock') && (computerSelection === 'scissors')) {
        console.log('Rock beats scissors, you won!')
        numberUserWon += 1
    }

    if ((playerSelection === 'paper') && (computerSelection === 'rock')) {
        console.log('Paper beats rock, you won!')
        numberUserWon += 1
    }

    if ((playerSelection === 'scissors') && (computerSelection === 'paper')) {
        console.log('Scissors beats paper, you won!')
        numberUserWon += 1
    }


    if (playerSelection === computerSelection) {
        console.log('It\'s a tie!')
    }


    if ((computerSelection === 'rock') && (playerSelection === 'scissors')) {
        console.log('Rock beats scissors, computer won!')
        numberComputerWon += 1
    }

    if ((computerSelection === 'paper') && (playerSelection === 'rock')) {
        console.log('Paper beats rock, computer won!')
        numberComputerWon += 1
    }

    if ((computerSelection === 'scissors') && (playerSelection === 'paper')) {
        console.log('Scissors beats paper, computer won!')
        numberComputerWon += 1
    }

}


let optionsArray = ['rock', 'paper', 'scissors']

computerPlay = () => {
    return choiceOfComputer = optionsArray[Math.floor(Math.random() * optionsArray.length)]
}


game = () => {

const playerSelection = prompt("Enter with your choice").toLocaleLowerCase();
const computerSelection = computerPlay()
console.log(`Player: ${playerSelection}\nComputer: ${computerSelection}`)

playRound(playerSelection, computerSelection)

}

let index = 0
while(index < 5) {
    game()
    index++
}

console.log(`User won ${numberUserWon} times
Computer won ${numberComputerWon} times
There was a tie ${5 - (numberComputerWon + numberUserWon)} times


${numberComputerWon > numberUserWon ? "Computer" : "User"} won!`)