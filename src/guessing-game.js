class GuessingGame {
    range = [0, 0];
    constructor() {}

    setRange(min, max) {
        this.range = [min, max];
    }

    guess() {
        this.lastGuess = Math.round((this.range[0] + this.range[1]) / 2);
        return this.lastGuess;
    }

    lower() {
        this.range = [this.range[0], this.lastGuess];
    }

    greater() {
        this.range = [this.lastGuess, this.range[1]];
    }
}

module.exports = GuessingGame;
