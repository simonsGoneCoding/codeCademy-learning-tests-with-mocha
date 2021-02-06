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
