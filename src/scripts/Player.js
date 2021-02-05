function Player(symbol, id) {
    this.name = `Player${id}`
    this.score = 0
    this.symbol = symbol

    this.updateScore = () => this.score++
}

