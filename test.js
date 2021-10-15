const Bowling = require("./index");
describe("Bowling", () => {
  it("should compute the score for a bad game", () => {
    const bowling = new Bowling();
    for (let i = 0; i < 20; i++) {
      bowling.roll(0);
    }
    const score = bowling.getScore();
    expect(score).toBe(0);
  });

  it("should compute the score be result of array", () => {
    const bowling = new Bowling();
    const rolls = [1, 4, 3, 2];

    rolls.forEach((roll) => {
      bowling.roll(roll);
    });

    for (let i = 0; i < 20 - rolls.length; i++) {
      bowling.roll(0);
    }
    const score = bowling.getScore();
    expect(score).toBe(10);
  });

  it("should compute the score for a spare", () => {
    const bowling = new Bowling();
    const rolls = [4, 6, 3, 2];

    rolls.forEach((roll) => {
      bowling.roll(roll);
    });

    for (let i = 0; i < 20 - rolls.length; i++) {
      bowling.roll(0);
    }
    const score = bowling.getScore();
    expect(score).toBe(18);
  });
  it("should compute the score for not a spare", () => {
    const bowling = new Bowling();
    const rolls = [1, 5, 5, 3];

    rolls.forEach((roll) => {
      bowling.roll(roll);
    });

    for (let i = 0; i < 20 - rolls.length; i++) {
      bowling.roll(0);
    }
    const score = bowling.getScore();
    expect(score).toBe(14);
  });
});
