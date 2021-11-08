var assert = require('assert');
var Calculate = require('../index.js');

describe('Calculate', () => {
  describe('.factorial', () => {
    it('test if 5! is 120', () => {
      //Setup
      const number = 5;
      const expected = 120;

      // Exercise
      const result = Calculate.factoral(number);

      // Verify
      assert.equal(result, expected);
    });

    it('test if 3! is 6', () => {
      //Setup
      const number = 3;
      const expected = 6;

      // Exercise
      const result = Calculate.factoral(number);

      // Verify
      assert.equal(result, expected);
    });

    it('edge case to test 0! returns 1', () => {
      //Setup
      const number = 0;
      const expected = 1;

      // Exercise
      const result = Calculate.factoral(number);

      // Verify
      assert.equal(result, expected);
    });
  });
});
