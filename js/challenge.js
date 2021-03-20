const timer = document.getElementById('counter')
const heart = document.getElementById('heart')
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const likeTracker = {}
const ul = document.querySelector('ul.likes')
let paused = false
const pauseButton = document.getElementById('pause')


// document.addEventListener('DOMContentLoaded', () => {

// }

function incrementTimer() {
    if (!paused) {
        plus.disabled = false
        minus.disabled = false
        heart.disabled = false
        let counter = parseInt(timer.innerText)
        counter += 1
        timer.innerText = counter
    } else {
        plus.disabled = true
        minus.disabled = true
        heart.disabled = true
    }
}

function decrementTimer() {
    let counter = parseInt(timer.innerText)
    counter -= 1
    timer.innerText = counter
}

function automaticallyIncrement() {
    setInterval(incrementTimer, 1000)
}

function manuallyIncrement() {
    plus.addEventListener('click', incrementTimer)
}

function manuallyDecrement() {
    minus.addEventListener('click', decrementTimer)
}

automaticallyIncrement()
manuallyIncrement()
manuallyDecrement()

function onHeartClick() {
    if (!paused) {
        heart.disabled = false
        heart.addEventListener('click', likeNumber)
    } else {
        heart.disabled = true
    }
}

function likeNumber() {
    let numberCounter = timer.innerText
    if (likeTracker[numberCounter]) {
        likeTracker[numberCounter]++
        const li = document.getElementById(numberCounter)
        li.innerText = `${numberCounter} has ${likeTracker[numberCounter]} likes`
    } else {
        likeTracker[numberCounter] = 1
        const li = document.createElement('li')
        li.innerText = `${numberCounter} has ${likeTracker[numberCounter]} like`
        li.setAttribute('id', `${numberCounter}`)
        ul.appendChild(li)
    }
}

function pauseClick() {
    pauseButton.addEventListener('click', pause)
}

function pause() {
    paused = !paused
    if (paused) {
        pauseButton.innerText = "resume"
    } else {
        pauseButton.innerText = "pause"
    }
}

onHeartClick()
pauseClick()

const commentForm = document.getElementById('comment-form')
const commentList = document.getElementById('list')
let commentInput = document.getElementById('comment-input')


commentForm.addEventListener('submit', addComment)

function addComment(event) {
    event.preventDefault()
    let comment = commentInput.value
    const liComment = document.createElement('li')
    liComment.innerText = comment
    commentList.appendChild(liComment)
    commentInput.value = ""
}


