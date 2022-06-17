class Bowling {

    constructor() {
        this.currentScore = 0;

        this.frameScore = 0;
        this.rollCount = 0;
        this.wasASpare = false;
    }

    roll(pins) {

        this.currentScore += pins;

        if (this.wasASpare) {
            this.currentScore += pins;
            this.wasASpare = false;
        }


        if (this.rollCount % 2 == 0) {
            this.frameScore = 0;
        }
        this.frameScore += pins;
        this.rollCount++;

        if (this.frameScore === 10) {
            this.wasASpare = true;
        }

    }

    getScore() {
        return this.currentScore;
    }

}

module.exports = Bowling;