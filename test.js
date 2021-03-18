const Bowling = require("./index");

describe("Bowling", () => {
  it("should compute the score for a very bad game", () => {
    const bowling = new Bowling();

    for (let i = 0; i < 20; i++) {
      bowling.roll(0);
    }

    expect(bowling.getScore()).toBe(0);
  });

  it("should compute the score for standard game", () => {
    const bowling = new Bowling();

    bowling.roll(3);
    bowling.roll(2);
    bowling.roll(4);
    bowling.roll(1);
    for (let i = 0; i < 16; i++) {
      bowling.roll(0);
    }

    expect(bowling.getScore()).toBe(10);
  });

  it("should compute the score for game with a spare", () => {
    const bowling = new Bowling();
    bowling.roll(6);
    bowling.roll(4);

    bowling.roll(3);
    bowling.roll(2);
    for (let i = 0; i < 16; i++) {
      bowling.roll(0);
    }

    expect(bowling.getScore()).toBe(18);
  });

  it("should compute the score for game with a spare", () => {
    const bowling = new Bowling();

    bowling.roll(1);
    bowling.roll(0);

    bowling.roll(6);
    bowling.roll(4);

    bowling.roll(3);
    bowling.roll(2);
    for (let i = 0; i < 16; i++) {
      bowling.roll(0);
    }

    expect(bowling.getScore()).toBe(19);
  });
});
