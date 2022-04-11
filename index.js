class Bowling {
    constructor() {
        this.rollScores = [];
    }


    roll(pins) {
        this.rollScores.push(pins);
    }

  getScore() {
    let score = 0;
    score += this.rollScores[0] + this.rollScores[1];
    for (let index=2; index<this.rollScores.length; index++){
          if (index % 2 === 1) {
            continue;
          }
          const multiplier = this.isSpare(index-2, index -1) ? 2 : 1
          
        score += this.rollScores[index] * multiplier + this.rollScores[index + 1];
      }
      
      return score
    }

  isSpare(rollIndex1, rollIndex2) { 
    return this.rollScores[rollIndex1] + this.rollScores[rollIndex2] === 10;
  }
}

module.exports = Bowling;