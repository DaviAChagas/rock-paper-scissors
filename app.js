let numberPlayerWon = 0
let numberComputerWon = 0

const roundMessage = document.querySelector('.roundMessage');

const optionButtons = document.querySelectorAll('.optionButton');

const displayOfPlayerScore = document.querySelector('.playerScore');
const displayOfComputerScore = document.querySelector('.computerScore');

const buttonToRestart = document.querySelector('#restart');

showPlayerWins = (playerSelection, computerSelection) => {


    if ((playerSelection === 'rock') && (computerSelection === 'scissors')) {
        roundMessage.textContent = 'Rock beats scissors, you won!'
         numberPlayerWon += 1
     }
 
     if ((playerSelection === 'paper') && (computerSelection === 'rock')) {
        roundMessage.textContent = 'Paper beats rock, you won!'
         numberPlayerWon += 1
     }
 
     if ((playerSelection === 'scissors') && (computerSelection === 'paper')) {
        roundMessage.textContent = 'Scissors beats paper, you won!'
         numberPlayerWon += 1
     }
}

showComputerWins = (playerSelection, computerSelection) => {
    if ((computerSelection === 'rock') && (playerSelection === 'scissors')) {
        roundMessage.textContent = 'Rock beats scissors, computer won!'
         numberComputerWon += 1
     }
 
     if ((computerSelection === 'paper') && (playerSelection === 'rock')) {
        roundMessage.textContent = 'Paper beats rock, computer won!'
         numberComputerWon += 1
     }
 
     if ((computerSelection === 'scissors') && (playerSelection === 'paper')) {
        roundMessage.textContent = 'Scissors beats paper, computer won!'
         numberComputerWon += 1
     }
}


playRound = (playerSelection, computerSelection) => {

    let scoreComparatorForPlayer = numberPlayerWon
    let scoreComparatorForPc = numberComputerWon

    const buttonsToDisable = document.querySelectorAll('.optionButton')

    const iconSelectedByPlayer = document.querySelector(`#${playerSelection}SVG`)
    const iconSelectedByPc = document.querySelector(`#${computerSelection}SVG`)

    const SVGPathSelectedByPlayer = document.querySelector(`.${playerSelection}Path`).style
    const SVGPathSelectedByPc = document.querySelector(`.${computerSelection}Path`).style

    showPlayerWins(playerSelection, computerSelection)
    showComputerWins(playerSelection, computerSelection)

    buttonsToDisable.forEach(buttonToDisable => {
        buttonToDisable.disabled = true
    })

    iconSelectedByPlayer.classList.add('animationClass')
    iconSelectedByPc.classList.add('animationClass')
    

    scoreComparatorForPlayer === numberPlayerWon ? 
    SVGPathSelectedByPlayer.fill = '#DE4242': 
    SVGPathSelectedByPlayer.fill = '#47A52F'

    scoreComparatorForPc === numberComputerWon ? 
    SVGPathSelectedByPc.fill = '#DE4242': 
    SVGPathSelectedByPc.fill = '#47A52F'


    if (playerSelection === computerSelection) {
        roundMessage.textContent = 'It\'s a tie!'
        document.querySelector(`.${playerSelection}Path`).style.fill = "#2AC0CA"
     }
     
    displayOfPlayerScore.textContent = `You: ${numberPlayerWon}`
    displayOfComputerScore.textContent = `Computer: ${numberComputerWon}`
}

setInterval(() => {  
    const SVGs = document.querySelectorAll('svg')
    const SVGsPath = document.querySelectorAll('.path')
    const buttonsToAble = document.querySelectorAll('.optionButton')

    SVGs.forEach(SVG => {
        SVG.classList.remove('animationClass')
    });

    SVGsPath.forEach(path => {
        path.style.fill = "#000000"
    })
    
    buttonsToAble.forEach(buttonToAble => {
        buttonToAble.disabled = false
    })
    
}, 2000)


let optionsArray = ['rock', 'paper', 'scissors']

computerPlay = () => {
    return choiceOfComputer = optionsArray[Math.floor(Math.random() * optionsArray.length)]
}

displayResultMessage = (boolean) => {
    const displayMessage = document.querySelector('.resultMessage')
    const blurAtTheScreen = document.querySelector('.blurApplication')

    const whoWon = document.querySelector('.whoWon')
    const finalScoreBoard = document.querySelector('.finalScoreBoard')


    whoWon.textContent = numberPlayerWon > numberComputerWon ? 'Congrats, you won! 🥳' 
    : 'Computer won! :('

    finalScoreBoard.textContent = `You: ${numberPlayerWon} X  Computer: ${numberComputerWon}`


    if(boolean === true) {
    displayMessage.style.display = 'flex'
    blurAtTheScreen.style.filter = 'blur(8px)'
    } 

    if(boolean === false) {
        displayMessage.style.display = 'none'
        blurAtTheScreen.style.filter = 'none'
    }

    if(boolean === 'ignore it') {
        displayMessage.style.display = 'none'
        blurAtTheScreen.style.filter = 'none'
    }

}

restartTheGame = () => {
    numberPlayerWon = 0
    numberComputerWon = 0

    displayResultMessage(false)
}
 
buttonToRestart.addEventListener('click', restartTheGame)

getResultMessage = (numberPlayerWon, numberComputerWon) => {
    if ((numberPlayerWon === 5) || (numberComputerWon === 5)) {
        displayResultMessage(true)
 }
}


game = (selectedButton) => {
    const playerSelection = selectedButton.getAttribute('id')

    const computerSelection = computerPlay()

     playRound(playerSelection, computerSelection);

        getResultMessage(numberPlayerWon, numberComputerWon)
   }



optionButtons.forEach((button) => {
    button.addEventListener('click', () => game(button));
  });