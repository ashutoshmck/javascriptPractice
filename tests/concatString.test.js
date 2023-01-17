const {
  concatString,
  concatStringArrow,
} = require("../problems//concatString");

describe("Concatenate string except first character", () => {
  test("Concatenate string except first character", () => {
    expect(concatString(["code", "academy"])).toBe("odecademy");
  });
  test("Concatenate string except first character", () => {
    expect(concatStringArrow(["code", "academy"])).toBe("odecademy");
  });
});
