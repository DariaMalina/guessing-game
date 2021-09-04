class GuessingGame {
    minimum;
    maximum;
    number;

    constructor() {
    }

    setRange(min, max) {
        this.minimum = min
        this.maximum = max
        return max + min
    }

    guess() {
        this.number = Math.round(this.setRange(this.minimum, this.maximum) / 2)
        return this.number
    }

    lower() {
        this.maximum = this.number
    }

    greater() {
        this.minimum = this.number
    }
}

module.exports = GuessingGame;
