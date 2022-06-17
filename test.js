const Bowling = require('./index');

describe('Bowling', () => {

    it('should return 0 if no pins have fallen', () => {
        const bowling = new Bowling();

        for (let i = 0; i < 20; i++) {
            bowling.roll(0);
        }

        expect(bowling.getScore()).toBe(0);
    });

    it('should works for a simple game', () => {
        const bowling = new Bowling();

        bowling.roll(3);
        bowling.roll(2);
        bowling.roll(4);
        bowling.roll(2);
        for (let i = 0; i < 16; i++) {
            bowling.roll(0);
        }

        expect(bowling.getScore()).toBe(11);

    });


    it('should works for a game with a spare', () => {
        const bowling = new Bowling();

        bowling.roll(6);
        bowling.roll(4);

        bowling.roll(4);
        bowling.roll(2);

        for (let i = 0; i < 16; i++) {
            bowling.roll(0);
        }

        expect(bowling.getScore()).toBe(20);

    });

});