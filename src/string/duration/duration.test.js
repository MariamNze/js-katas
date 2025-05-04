const convertTime = require("./duration");

test("convertTime function exists", () => {
  expect(typeof convertTime).toBe("function");
});

test("convertTime as one parameter", () => {
  expect(convertTime.length).toBe(1);
});

// TODO add your tests here

test('converts "02:30" to 150', () => {
  expect(convertTime("02:30")).toBe(150);
});

test('converts "01:45" to 105', () => {
  expect(convertTime("01:45")).toBe(105);
});

test('returns null for invalid format "01h45m"', () => {
  expect(convertTime("01h45m")).toBe(null);
});