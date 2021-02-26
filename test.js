const Bowling = require("./index");
describe("Bowling", () => {
  it("should compute a very bad game", () => {
    const bowling = new Bowling();
    for (let i = 0; i < 20; i++) {
      bowling.roll(0);
    }
    expect(bowling.getScore()).toBe(0);
  });

  it("should compute a simple game", () => {
    const bowling = new Bowling();

    bowling.roll(3);
    bowling.roll(2);
    bowling.roll(7);
    bowling.roll(1);

    for (let i = 0; i < 20; i++) {
      bowling.roll(0);
    }
    expect(bowling.getScore()).toBe(13);
  });

  it.only("should compute a simple game", () => {
    const bowling = new Bowling();

    bowling.roll(7);
    bowling.roll(3);
    bowling.roll(7);
    bowling.roll(1);

    // for (let i = 0; i < 20; i++) {
    //   bowling.roll(0);
    // }
    expect(bowling.getScore()).toBe(25);
  });
});
