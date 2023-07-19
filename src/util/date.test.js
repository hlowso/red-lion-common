const { describe, expect, test } = require("@jest/globals");
const { isLate } = require("./date");

describe("Util - Date", () => {
  describe("isLate", () => {
    test("correctly indicates a date is not late if it's today", () => {
      expect(isLate(new Date())).toBe(false);
    });
  });
});
