class Bowling {
  constructor() {
    this._rolls = [];
  }

  roll(pins) {
    this._rolls.push(pins);
  }

  isSpare(rollNumber) {
    if (rollNumber < 2) {
      return false;
    }
    const first = this._rolls[rollNumber - 2];
    const last = this._rolls[rollNumber - 1];
    const spare = first + last;
    return spare === 10;
  }

  getScore() {
    let score = 0;
    for (let rollNumber in this._rolls) {
      const pins = this._rolls[rollNumber];

      const spare = this.isSpare(rollNumber);

      if (spare) {
        score += pins;
      }

      score += pins;
    }
    return score;
  }
}

module.exports = Bowling;
