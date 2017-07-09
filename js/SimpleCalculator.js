function isInvalidNumericalValue(value) {
  return !value || isNaN(value);
}

class SimpleCalculator {
  /**
   * addOne
   * Returns the inputted numerical value increased by 1
   * @static
   * @param {Number} value
   * @returns {Number} increasedValue
   * 
   * @memberOf SimpleCalculator
   */
  static addOne(value) {
    if (isInvalidNumericalValue(value)) {
      throw new Error('The addOne method requires a valid number input');
    }

    return value + 1;
  }

  /**
   * subtractOne
   * Returns the inputted numerical value decreased by 1
   * @static
   * @param {Number} value
   * @returns {Number} decreasedValue
   * 
   * @memberOf SimpleCalculator
   */
  static subtractOne(value) {
    if (isInvalidNumericalValue(value)) {
      throw new Error('The subtractOne method requires a valid number input');
    }

    return value - 1;
  }

  /**
   * sum
   * Return the sum of an array of numerical values
   * @static
   * @param {Number[]} values 
   * @returns {Number} sumOfValues
   * 
   * @memberOf SimpleCalculator
   */
  static sum(values) {
    var result = 0;
    for (let i = 0; i < values.length; i++) {
      if (isInvalidNumericalValue(values[i])) {
        throw new Error('The sum method requires a valid number input');
      } else {
        result += values[i];
      }

    }
    return result;
  }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = SimpleCalculator;
}