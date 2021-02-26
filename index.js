class Bowling {
  constructor() {
    this.score = 0;
    this.rollCount = 0;

    this.previousRoll = 0;

    this.isSpare = false;
    this.isStrike = false;
  }

  roll(pins) {
    const isEndOfFrame = this.rollCount % 2 === 1;

    this.score += pins;

    if (this.isSpare) {
      this.score += pins;
      this.isSpare = false;
    }

    if (this.isStrike) {
      this.score += pins;
      if (isEndOfFrame) {
        this.isStrike = false;
      }
    }

    if (isEndOfFrame) {
      if (this.previousRoll + pins === 10) {
        this.isSpare = true;
      }
    } else {
      if (pins === 10) {
        this.isStrike = true;
        this.rollCount++;
      }
    }

    this.rollCount++;
    this.previousRoll = pins;
  }

  getScore() {
    return this.score;
  }
}

module.exports = Bowling;
