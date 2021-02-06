const assert = require("assert");

//describe and it functions
const arr = [1, 5, 7, 9, 0];

describe("Math", () => {
  describe(".max", () => {
    it("returns the argument with the highest value", () => {
      Math.max(...arr);
    });
  });
  describe(".min", () => {
    it("returns the argument with the lowest value", () => {
      Math.min(...arr);
    });
  });
});

//assert
describe("+", () => {
  it("returns the sum of its args", () => {
    assert(1 + 4 === 5);
  });
});

//Setup, Exercise, and Verify - 3 phase approach
// Naive approach
describe(".pop", () => {
  it("returns the last element in the array [naive]", () => {
    assert.ok(["padawan", "knight"].pop() === "knight");
  });
});

// 3 phase approach
describe(".pop", () => {
  it("returns the last element in the array [3phase]", () => {
    // Setup
    const knightString = "knight";
    const jediPath = ["padawan", knightString];

    // Exercise
    const popped = jediPath.pop();

    // Verify
    assert.ok(popped === knightString);
  });
});
