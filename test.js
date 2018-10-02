const Bowling = require('./index');

describe('Bowling', () => {

  it('should be defined', () => {
    expect(new Bowling()).toBeDefined();
  });
});
