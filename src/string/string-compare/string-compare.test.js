const compare = require("./string-compare");

test("compare function exists", () => {
  expect(typeof compare).toBe("function");
});

test("compare as two parameters", () => {
  expect(compare.length).toBe(2);
});

// TODO add your tests here

test('compare("a", "a") returns 1', () => {
  expect(compare("a", "a")).toBe(1);
});

test('compare("a", "b") returns 0', () => {
  expect(compare("a", "b")).toBe(0);
});

test('compare("aa", "ba") returns 1', () => {
  expect(compare("aa", "ba")).toBe(1);
});

test('compare("cassis", "castor") returns 3', () => {
  expect(compare("cassis", "castor")).toBe(3);
});

test('compare("tacos", "poulpe") returns -1 (different lengths)', () => {
  expect(compare("tacos", "poulpe")).toBe(-1);
});

test('compare(null, "a") returns -1', () => {
  expect(compare(null, "a")).toBe(-1);
});