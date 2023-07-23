const { describe, expect, test } = require("@jest/globals");
const { isLate, isCron } = require("./date");

describe("Util - Date", () => {
  describe("isLate", () => {
    test("correctly indicates a date is not late if it's today", () => {
      expect(isLate(new Date())).toBe(false);
    });
  });

  describe("isCron", () => {
    test("returns false on undefined", () => {
      expect(isCron()).toBe(false);
    });
    test("returns false on empty string", () => {
      expect(isCron("")).toBe(false);
    });
    test("returns false on null", () => {
      expect(isCron(null)).toBe(false);
    });
    test("returns false on date", () => {
      expect(isCron(new Date())).toBe(false);
    });
    test("returns false on date string", () => {
      expect(isCron("2012-03-07")).toBe(false);
    });
    test("returns true on 'every day'", () => {
      expect(isCron("0 0 * * *")).toBe(true);
    });
    test("returns true on 'mondays wednesdays fridays'", () => {
      expect(isCron("0 0 * * 1,2,3")).toBe(true);
    });
  });
});
