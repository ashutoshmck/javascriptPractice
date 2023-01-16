const { modifyString, modifyStringArrow } = require("./modifyString");

describe("Modify string", () => {
  test("replace every character in a given string with the character following it in the alphabet", () => {
    expect(modifyString("codeacademy")).toBe("dpefbdbefnz");
  });
  test("replace every character in a given string with the character following it in the alphabet", () => {
    expect(modifyStringArrow("codeacademy")).toBe("dpefbdbefnz");
  });
});
