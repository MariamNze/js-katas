/*
Create a function `getLikes` which receives an array of names, and returns:
* [] => "Be the first to like this"
* ["Cartman"] => "Cartman likes this"
* ["Kenny", "Cartman"] => "Kenny and Cartman like this"
* ["Stan", "Kyle", "Kenny", "Cartman"] => "Stan and 3 other people like this"

*/

// TODO add your code here

function getLikes(names) {
    if (names.length === 0) {
        return "Be the first to like this";
    } else if (names.length === 1) {
        return `${names[0]} likes this`;
    } else if (names.length === 2) {
        return `${names[0]} and ${names[1]} like this`;
    } else names.length[0]; {
        return `${names[0]} and ${names.length - 1} other people like this`;
    }
}

module.exports = getLikes;