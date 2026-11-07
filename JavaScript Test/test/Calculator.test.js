const {sum, subtract} = require("../src/Calculator");

describe("Calculator", () => {
test("test the addition of two numbers", () => {
  expect(sum(2, 3)).toBe(5);
});

test("test the addition of two negative numbers", () => {
    expect(sum(-2, -3)).toBe(-5)
})

test("test that if one of the numbers is a string, it throws an error", () => {
    expect(() => sum(2, "3")).toThrow("Invalid input: both arguments must be numbers");
});
})