const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machinescore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())

}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}


const playTheGame = (human, machine) => {

    console.log('Humano ' + human + 'Maquina ' + machine)

    if (human === machine) {
        result.innerHTML = 'Deu enpate!'
    } else if (human === ('paper' && machine === 'rock') ||
        (human === 'scissors' & machine === 'paper') ||
        (human === 'rock' & machine === 'scissors')) 
        {
        humanScoreNumber++
        humanScore.innerHTML =  humanScoreNumber
        result.innerHTML = 'você ganhou!'
    } else {
        machineScoreNumber++
        machinescore.innerHTML = machineScoreNumber
        result.innerHTML = 'você perdeu para Alexa!'
    }


}








































/*const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')


let  humanScoreNumber = 0 
let  machineScoreNumber = 0 

const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]

}

const playTheGame = (human, machine) => {

    console.log('Humano:' + human + ' Maquina:' + machine)


    if (human === machine) {
        result.innerHTML = 'Deu empate!'
    } else if ((human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')
        ) {
            humanScoreNumber++
            humanScore.innerHTML = humanScoreNumber
        result.innerHTML = 'você ganhou!'
    } else {
        result.innerHTML = 'você perdeu para a Alexa!'
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
    }

}
*/

























