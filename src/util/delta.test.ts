const { describe, expect, test } = require("@jest/globals");
const { applyFactorToDelta } = require("./delta");

describe("applyFactorToDelta", () => {
  test("applies factor to a formula", () => {
    const delta = {
      tallies: {
        gold: {
          expression: "a + 2 * b - 10 * c",
          variables: [
            { letter: "a", kind: "activity:field", key: "foo" },
            { letter: "b", kind: "activity:field", key: "bar" },
            { letter: "c", kind: "activity:field", key: "baz" },
          ],
        },
      },
    };
    expect(applyFactorToDelta(3, delta)).toEqual({
      items: {},
      tallies: {
        gold: {
          expression: "3 * (a + 2 * b - 10 * c)",
          variables: [
            { letter: "a", kind: "activity:field", key: "foo" },
            { letter: "b", kind: "activity:field", key: "bar" },
            { letter: "c", kind: "activity:field", key: "baz" },
          ],
        },
      },
    });
  });
});
