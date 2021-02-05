const player1 = new Player('x', 1)
const player2 = new Player('circle', 2)

let currentPlayer = player1
let score = 0

const slots = Array.from(game.children).flatMap(row => Array.from(row.children))

function startGame() {
    addEventToElements(markArea, 'click', mark)

    btnInit.hide()
    markArea.forEach(div => div.removeClass('unclickable'))
    show(`Vez de ${currentPlayer.name}`)
}


function mark({ target }) {

    if (!target.isMarked()) {
        target.addClass(currentPlayer.symbol)
        target.addClass('marked')
        changePlayer()
        checkIfSomeoneWon()
    }
}

function changePlayer() {
    console.log(currentPlayer.name)
    currentPlayer = currentPlayer.name === 'Player1' ? player2 : player1
    show(`Vez de ${currentPlayer.name}`)
}

function checkIfSomeoneWon() {
    const possiblitiesOfWin = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        
        [0,3,6],
        [1,4,7],
        [2,5,8],
        
        [0,4,8],
        [2,4,6],
    ]

    const checkIfPlayer1Wins = slots.some(slot => slot.isMarked())
    const checkIfPlayer2Wins = slots.every(slot => slot.isMarked())

    if (checkIfPlayer1Wins) alert('Player1 Wins!')
    if (checkIfPlayer2Wins) alert('Player2 Wins!')
}

function show(data) {
    display.innerHTML = data
}

HTMLDivElement.prototype.isMarked = function () {
    return this.classList.contains('marked')
}

function loadPage() {
    markArea.forEach(div => div.addClass('unclickable'))
}

/* EVENTS */

btnInit.addEventListener('click', startGame)

document.addEventListener('DOMContentLoaded', loadPage)