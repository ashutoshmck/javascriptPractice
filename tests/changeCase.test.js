const { changeCase, changeCaseArrow } = require("../problems//changeCase");

describe("Change capitalisation", () => {
  test("All uppercase characters should be lowercase and vice versa", () => {
    var result = changeCase("MeRRy hAD a LITTle lAMp");
    expect(result).toBe("mErrY Had A littLE LamP");
  });
  test("All uppercase characters should be lowercase and vice versa", () => {
    var result = changeCaseArrow("MeRRy hAD a LITTle lAMp");
    expect(result).toBe("mErrY Had A littLE LamP");
  });
});
