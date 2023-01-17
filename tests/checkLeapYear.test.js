const {
  checkLeapYear,
  checkLeapYearArrow,
} = require("../problems//checkLeapYear");

describe("Check if leap year", () => {
  test("Check if leap year", () => {
    expect(checkLeapYear(2024)).toBe(true);
  });
  test("Check if leap year", () => {
    expect(checkLeapYearArrow(2024)).toBe(true);
  });
});
