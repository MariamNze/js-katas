const countChar = require("./count-letters");

test("countChar function exists", () => {
  expect(typeof countChar).toBe("function");
});

test("countChar as two parameters", () => {
  expect(countChar.length).toBe(2);
});

// TODO add your tests here

test("empty string and 'a' returns 0", () => {
  expect(countChar("", "a")).toBe(0);
});

test("'a' and 'a' returns 1", () => {
  expect(countChar("a", "a")).toBe(1);
});

test("'aaaaabbbaa' and 'a' returns 7", () => {
  expect(countChar("aaaaabbbaa", "a")).toBe(7);
});

test("'bbacbaaa' and 'c' returns 1", () => {
  expect(countChar("bbacbaaa", "c")).toBe(1);
});

test("'bbcc' and 'a' returns 0", () => {
  expect(countChar("bbcc", "a")).toBe(0);
});

test("null string and 'a' returns -1", () => {
  expect(countChar(null, "a")).toBe(-1);
});
