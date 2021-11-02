const assert = require('assert');
const Rooster = require('../index');

describe('Rooster object test', () => {
  describe('.announceDawn method test', () => {
    it('returns a rooster call', () => {
      // Setup
      const expected = 'cock-a-doodle-doo!';

      // Exercise
      const actual = Rooster.announceDawn();

      // Verify
      assert.equal(actual, expected);
    });
  });

  describe('.timeAtDawn method test', () => {
    it('returns its argument as a string', () => {
      // Setup
      const input = 12;
      const expected = '12';

      // Exercise
      const actual = Rooster.timeAtDawn(input);

      // Verify
      assert.equal(actual, expected);
    });

    it('throws an error if passed a number less than 0', () => {
      // Setup
      const input = -1;
      const expected = RangeError;

      // Verify
      assert.throws(() => {
        Rooster.timeAtDawn(input);
      }, expected);
    });

    it('throws an error if passed a number greater than 23', () => {
      // Setup
      const input = 24;
      const expected = RangeError;

      // Verify
      assert.throws(() => {
        Rooster.timeAtDawn(input);
      }, expected);
    });
  });
});
