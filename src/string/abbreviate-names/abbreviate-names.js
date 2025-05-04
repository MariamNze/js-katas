/*
Create a function `abbreviate` which converts a name into initials.

The output should be capital letters with a dot separating them.

Example:
* "Alyson Hannigan" -> "A.H"
* "Cobie Smulders" -> "C.S"
* "Neil Patrick Harris" -> "N.P.H"

Add you own tests.

*/

// TODO add your code here

function abbreviate(str) {
    return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase())
    .join('.');
}

module.exports = abbreviate;
