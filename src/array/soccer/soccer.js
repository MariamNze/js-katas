/*
A soccer match took place between 2 teams. You are given the list of goals scored in a table of numbers: each number represents a goal of one of the teams:
- 1 for a team 1 goal
- 2 for a team 2 goal

Create a function `getScore` which returns the string of the current scores and the winning team.
Example:
* points: [1, 1, 1], result: "3-0: team 1 wins the game"
* points: [2, 1, 2, 2], result: "1-3: team 2 wins the game"
* points: [1, 2, 1, 2], result: "2-2: draw"
* points: [], result: "0-0: draw"

If the argument is null, return "Illegal argument".

If a value of the argument is not 1 or 2, return "Illegal argument".
*/
// TODO add your code here

function getScore(points) {
    if (!Array.isArray(points)) {
        return "Illegal argument";
    }

    for (let i = 0; i < points.length; i++) {
        if (points[i] !== 1 && points[i] !== 2) {
            return "Illegal argument";
        }
    }

    let team1 = 0;
    let team2 = 0;
    for (let i = 0; i < points.length; i++) {
        if (points[i] === 1) {
            team1 += 1;
        }
        if (points[i] === 2) {
            team2 += 1;
        }
    }
    if (team1 === team2) {
        return `${team1}-${team2} : draw`;
    }
    if (team1 > team2) {
        return `${team1}-${team2} : team 1 wins the game`;
    }
    if (team1 < team2) {
        return `${team1}-${team2} : team 2 wins the game`;
    }
}

console.log(getScore);

// Begin of tests
const assert = require("assert");
assert.strictEqual(typeof getScore, "function");
assert.strictEqual(getScore.length, 1);
assert.deepStrictEqual(getScore(null), "Illegal argument");
assert.strictEqual(getScore([]), "0-0 : draw");
assert.strictEqual(getScore([1, 1, 1]), "3-0 : team 1 wins the game");
assert.strictEqual(getScore([2, 2, 2]), "0-3 : team 2 wins the game");
assert.strictEqual(getScore([1, 1, 2, 2]), "2-2 : draw");
assert.strictEqual(getScore([1, 2, 1, 3, 1, 2]), "Illegal argument");
assert.strictEqual(getScore(["1", "2"]), "Illegal argument");
// End of tests

