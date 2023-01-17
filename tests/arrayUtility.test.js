const { getTripleFromEvenNumbers } = require("../problems/arrayUtility");

describe("Array Utilities", () => {
  describe("Double Numbers", () => {
    it("Should triple the elements and filter even elements when input is an array", () => {
      expect(getTripleFromEvenNumbers([1, 2, 3])).toStrictEqual([6]);
    });
    it("Should throw error when input is not an array", () => {
      expect(() => {
        getTripleFromEvenNumbers(1);
      }).toThrow("Invalid Input");
    });
    it("Should throw error when input is not an array but has non integer elements", () => {
      expect(() => {
        getTripleFromEvenNumbers(["Ashutosh", "Senapati"]);
      }).toThrow("Not an integer input");
    });
  });
});
