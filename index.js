class Bowling {
  constructor() {
    this.rolls = []; // [6, 4, 3, 2, 0, 0, 0, 0, 0]
    this.pinsOver = 0;
    this.lastFrameWasASpare = false;
  }

  roll(pins) {
    this.rolls.push(pins);

    // if(this.lastFrameWasASpare) {
    //   this.pinsOver += pins;
    //   this.lastFrameWasASpare = false;
    // }
    // this.pinsOver += pins;

    // if (pit) {
    //   this.lastFrameWasASpare = true;
    // }
  }

  getScore() {
    let pinsOver = 0;
    for (let i = 0; i < this.rolls.length; i++) {
      const pins = this.rolls[i];

      const thisIsASPare = this.rolls[i] + this.rolls[i + 1] === 10;
      if (thisIsASPare) {
        pinsOver += this.rolls[i + 2];
      }
      pinsOver += pins;
    }

    return pinsOver;
  }
}

module.exports = Bowling;
