class Bowling {
  constructor() {
    this.pins = 0;
    this.rollCount = 0;
    this.previousRoll = 0;
    this.isSpare = false;
  }

  roll(pins) {
    console.log(this.rollCount, pins);
    console.log("isSpare", this.isSpare);
    console.log("previous roll", this.previousRoll);

    if (this.isSpare) {
      this.pins += pins;
      console.log("set isSpare to false");
      this.isSpare = false;
    }

    if (this.rollCount % 2 === 1) {
      // even
      console.log(this.previousRoll, pins);
      if (this.previousRoll + pins === 10) {
        console.log("set isSpare to true");
        this.isSpare = true;
      }
    }

    this.pins += pins;

    this.rollCount++;
    this.previousRoll = pins;
  }

  getScore() {
    return this.pins;
  }
}

module.exports = Bowling;
