const Bowling = require('./index');

const NUMBER_OF_THROWS = 20

describe('Bowling', () => {
  let bowling;
  beforeEach(() => { 
    bowling = new Bowling();
  })

  it('should works for very bad game', () => {
    for(let i = 0; i < NUMBER_OF_THROWS; i++) {
      bowling.roll(0);
    }
    expect(bowling.getScore()).toBe(0);
  });

  it('should works for normal game', () => {
    for(let i = 0; i < NUMBER_OF_THROWS/2; i++) {
      bowling.roll(3);
      bowling.roll(4);
    }
    expect(bowling.getScore()).toBe( 70);
  });

  it('should works for normal game', () => {
    bowling.roll(6);
    bowling.roll(4);
    bowling.roll(4);
    bowling.roll(2);
    for (let i = 4; i < NUMBER_OF_THROWS; i++) {
      bowling.roll(0)
    }
    expect(bowling.getScore()).toBe(20);
  });


})