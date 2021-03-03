const Bowling = require("./index");

describe("Bowling", () => {
  it("should compute the score for a bad game", () => {
    const bowling = new Bowling();
    for (let i = 0; i < 20; i++) {
      bowling.roll(0);
    }
    expect(bowling.getScore()).toBe(0);
  });

  it("should compute the score for a good game", () => {
    const bowling = new Bowling();
    bowling.roll(4);
    bowling.roll(3);
    bowling.roll(5);
    bowling.roll(1);
    for (let i = 0; i < 16; i++) {
      bowling.roll(0);
    }
    expect(bowling.getScore()).toBe(13);
  });

  it("should compute the score for a game with a spare", () => {
    const bowling = new Bowling();
    bowling.roll(7);
    bowling.roll(3);
    bowling.roll(5);
    bowling.roll(1);
    for (let i = 0; i < 16; i++) {
      bowling.roll(0);
    }
    expect(bowling.getScore()).toBe(21);
  });

  it("should compute the score for a game with a spare in the 2nd frame", () => {
    const bowling = new Bowling();
    bowling.roll(2);
    bowling.roll(2);

    bowling.roll(7);
    bowling.roll(3);

    bowling.roll(5);
    bowling.roll(1);
    for (let i = 0; i < 14; i++) {
      bowling.roll(0);
    }
    expect(bowling.getScore()).toBe(25);
  });
});
