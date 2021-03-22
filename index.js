class Bowling {
  constructor() {
    this.allRolls = [];
  }
  roll(pins) {
    this.allRolls.push(pins);
  }

  getScore() {
    let score = 0;

    console.log(this.allRolls);

    for (let i = 0; i < this.allRolls.length / 2; i++) {
      const pinsRoll1 = this.allRolls[2 * i];
      const pinsRoll2 = this.allRolls[2 * i + 1];

      score += pinsRoll1 + pinsRoll2;
      if (pinsRoll1 + pinsRoll2 === 10) {
        score = score + this.allRolls[2 * (i + 1)];
      }
    }

    return score;
  }
}

module.exports = Bowling;
