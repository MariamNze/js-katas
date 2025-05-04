const isPalindrome = require("./palindrome");

test("isPalindrome function exists", () => {
  expect(typeof isPalindrome).toBe("function");
});

test("isPalindrome as one parameter", () => {
  expect(isPalindrome.length).toBe(1);
});

// TODO add your tests here

test("'rotor' returns true", () => {
  expect(isPalindrome("rotor")).toBe(true);
});

test("'tacos' returns false", () => {
  expect(isPalindrome("tacos")).toBe(false);
});

test("'Kayak' returns true", () => {
  expect(isPalindrome("Kayak")).toBe(true);
});

test("null string returns true", () => {
  expect(isPalindrome(null)).toBe(true);
});

test("empty string returns true", () => {
  expect(isPalindrome("")).toBe(true);
});

