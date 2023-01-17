const { checkString, checkStringArrow } = require("../problems//checkString");

describe("Check if string ends with 'Scripts' ", () => {
  test("Check if string ends with 'Scripts' ", () => {
    expect(checkString(["javaScript"])).toBe(true);
  });
  test("Check if string ends with 'Scripts' ", () => {
    expect(checkStringArrow(["javaScript"])).toBe(true);
  });
});
