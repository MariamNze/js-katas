const abbreviate = require("./abbreviate-names");

test("abbreviate function exists", () => {
  expect(typeof abbreviate).toBe("function");
});

test("abbreviate as one parameter", () => {
  expect(abbreviate.length).toBe(1);
});

// TODO add your tests here

test("abbreviates name with two words", () => {
  expect(abbreviate("Alyson Hannigan")).toBe("A.H");
});

test("abbreviates name with three words", () => {
  expect(abbreviate("Neil Patrick Harris")).toBe("N.P.H");
});