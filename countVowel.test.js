const { countVowel, countVowelArrow } = require("./countVowel");

describe("Count number of vowels in string", () => {
  test("Count number of vowels in string", () => {
    expect(countVowel("codeacademy")).toBe(5);
  });
  test("Count number of vowels in string", () => {
    expect(countVowelArrow("codeacademy")).toBe(5);
  });
});
