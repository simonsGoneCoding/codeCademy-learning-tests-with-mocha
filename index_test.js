const arr = [1, 5, 7, 9, 0];

describe("Math", () => {
  describe(".max", () => {
    it("returns the argument with the highest value", () => {
      Math.max([...arr]);
    });
  });
  describe(".min", () => {
    it("returns the argument with the lowest value", () => {
      Math.min([...arr]);
    });
  });
});
