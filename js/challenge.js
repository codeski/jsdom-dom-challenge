document.addEventListener('DOMContentLoaded', () => {

}

const timer = document.getElementById('counter')

const heartButton = document.getElementById('')

function incrementTimer() {
    let counter = parseInt(timer.innerText)
    counter += 1
    timer.innerText = counter
}

function derementTimer() {
    let counter = parseInt(timer.innerText)
    counter -= 1
    timer.innerText = counter
}

function automaticallyIncrement() {
    setInterval(incrementTimer, 1000)
}

function manuallyIncrement() {
    const plusButton = document.querrySelector('#plus')
    plusButton.addEventListener('click', incrementTimer)
}

function manuallyDecrement() {
    const minusButton = document.querrySelector('#minus')
    minusButton.addEventListener('click', decrmentTimer)
}

heartButton.addEventListener('click', likedNumber)

function likedNumber() {
    
}

