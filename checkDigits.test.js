const checkDigits = require("./checkDigits");

describe("Check if all digits are same", () => {
    test('All digits in 55 should be same', () => {
      var result = checkDigits.checkDigits(55)
      expect(result).toBe(true);
    });
    test('All digits in 55 should be same', () => {
        var result = checkDigits.checkDigits(55)
        expect(result).toBe(true);
      });
   })