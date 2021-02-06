const player1 = new Player('x', 1)
const player2 = new Player('circle', 2)

const slots = Array.from(game.children).flatMap(row => Array.from(row.children))

let currentPlayer = player1

function startGame() {
    addEventToElements(markArea, 'click', mark)
    slots.forEach(div => div.reset())

    btnInit.hide()
    show(`Vez de ${currentPlayer.name}`)
}

function finishGame() {
    btnInit.show()
    removeEventFromElements(markArea, 'click', mark)
}

function mark({ target }) {
    if (!target.isMarked()) {
        target.addClass(currentPlayer.symbol)
        target.addClass('marked')

        const { winner = null, winnerMove = null } = checkIfSomeoneWon()
        winner ? showWinner(winner, winnerMove) : changePlayer()
    }
}

function changePlayer() {
    currentPlayer = currentPlayer.name === 'Player1' ? player2 : player1
    show(`Vez de ${currentPlayer.name}`)
}

function show(data) {
    display.innerHTML = data
}

function showWinner(winner, winningMove) {
    show(`${winner} venceu!`)

    //color divs
    const divsToColor = winningMove.map(move => slots[move])
    divsToColor.forEach(div => div.style.backgroundColor = 'skyblue')

    finishGame()
}

function checkIfSomeoneWon() {
    const possiblitiesOfWin = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6],
    ]

    const { x, circle } = getArrayOfEverySymbol()

    const getTurnsThatWin = symbol => possiblitiesOfWin.map(pos => symbol.filter(n => pos.repet(n) > 0))
    const getWinningMove = symbol => getTurnsThatWin(symbol).filter(move => move.length === 3).flat()

    const checkIfPlayer1Wins = getTurnsThatWin(x).some(turn => turn.length === 3)
    const checkIfPlayer2Wins = getTurnsThatWin(circle).some(turn => turn.length === 3)

    if (checkIfPlayer1Wins) return { winner: player1.name, winnerMove: getWinningMove(x) }
    if (checkIfPlayer2Wins) return { winner: player2.name, winnerMove: getWinningMove(circle) }

    return {}
}

function getArrayOfEverySymbol() {
    const getArrayOfSymbol = symbol => slots.filter(div => div.classList.contains(symbol)).map(div => slots.indexOf(div))

    return {
        x: getArrayOfSymbol('x'),
        circle: getArrayOfSymbol('circle')
    }
}


HTMLDivElement.prototype.reset = function () {
    this.removeClass('marked')
    this.removeClass('x')
    this.removeClass('circle')
    this.removeClass('marked')
    this.style.backgroundColor = '#fff'
}

HTMLDivElement.prototype.isMarked = function () {
    return this.classList.contains('marked')
}

function loadPage() {
    startGame()
}

/* EVENTS */

btnInit.addEventListener('click', startGame)

document.addEventListener('DOMContentLoaded', loadPage)