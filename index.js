class Bowling {
  constructor() {
    this.rolls = [];
  }

  roll(pins) {
    this.rolls.push(pins);
  }

  getScore() {
    let score = 0;

    let isEndOfFrame = false;

    for (let i = 0; i < this.rolls.length; i++) {
      const pins = this.rolls[i];

      score += pins;

      const isSpare = isEndOfFrame && i > 0 && pins + this.rolls[i - 1] === 10;
      if (isSpare) {
        score += this.rolls[i + 1];
      }

      const isStrike = !isEndOfFrame && pins === 10;
      if (isStrike) {
        score += this.rolls[i + 1] + this.rolls[i + 2];
        isEndOfFrame = true;
      }

      isEndOfFrame = !isEndOfFrame;
    }

    return score;
  }
}

module.exports = Bowling;
