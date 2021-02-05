const player1 = new Player('x', 1)
const player2 = new Player('circle', 2)


let currentPlayer = player1
let score = 0

function startGame() {
    addEventToElements(checkArea, 'click', check)

    btnInit.hide()
    checkArea.forEach(div => div.removeClass('unclickable'))
    display(currentPlayer)
}

function display(data) {
    display.textContent = data
}

function check(e) {
    e.target.addClass('circle')
}

function changePlayer() {

}

function loadPage() {
    checkArea.forEach(div => div.addClass('unclickable'))
}

/* EVENTS */

btnInit.addEventListener('click', startGame)

document.addEventListener('DOMContentLoaded', loadPage)