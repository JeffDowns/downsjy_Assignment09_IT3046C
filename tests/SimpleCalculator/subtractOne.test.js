const SimpleCalculator = require('../../js/SimpleCalculator');

describe('SimpleCalculator - subtractOne()', function () {
  it('should subtract one from inputted value', function () {
    expect(SimpleCalculator.subtractOne(5)).toBe(4);
  });
  it('should not allow undefined input', function () {
    expect(function () {
      SimpleCalculator.subtractOne();
    }).toThrow();
  });

  it('should not allow null input', function () {
    expect(function () {
      SimpleCalculator.subtractOne(null);
    }).toThrow();
  });
  it('should not allow string input', function () {
    expect(function () {
      SimpleCalculator.subtractOne('string');
    }).toThrow();
  });
});
