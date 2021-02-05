const players = [
    new Player('x'),
    new Player('circle')
]

function changePlayer() {

}


function startGame() {
    checkArea.forEach(div => div.removeClass('unclickable'))
    addEventToElements(checkArea, 'click', check)




}

function check(e) {
    e.target.addClass('circle')
}

function loadPage() {
    checkArea.forEach(div => div.addClass('unclickable'))
}

/* EVENTS */

btnInit.addEventListener('click', startGame)

document.addEventListener('DOMContentLoaded', loadPage)