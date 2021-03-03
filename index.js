class Bowling {
  constructor() {
    this.score = 0;
    this.firstSpare = 0;
  }
  roll(pins) {
    if (this.score === 10) {
      this.score += pins;
    }

    this.score += pins;
  }

  getScore() {
    return this.score;
  }
}

module.exports = Bowling;
