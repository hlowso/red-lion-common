const { describe, expect, test } = require("@jest/globals");
const { dueToday } = require("./activity");

describe("Util - Activity", () => {
  describe("dueToday", () => {
    test("correctly indicates a daily recurring activity is due today", () => {
      expect(dueToday({ schedule: "0 0 * * *" })).toBe(true);
    });

    test("correctly indicates an activity scheduled for today is due today", () => {
      expect(dueToday({ schedule: new Date() })).toBe(true);
    });

    test("correctly indicates an activity with no schedule is not due today", () => {
      expect(dueToday({ schedule: undefined })).toBe(false);
    });
  });
});
