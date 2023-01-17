const {
  longestString,
  longestStringArrow,
} = require("../problems//longestString");

describe("Find longest string in an array of strings", () => {
  test("Longest string should be academy", () => {
    expect(longestString(["we", "love", "code", "academy"])).toBe("academy");
  });
  test("Longest string should be academy", () => {
    expect(longestStringArrow(["we", "love", "code", "academy"])).toBe(
      "academy"
    );
  });
});
