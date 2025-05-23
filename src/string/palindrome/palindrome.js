/*
A palindrome is a word or a phrase that reads the same backwards as forwards, example. madam.

Create a function `isPalindrome` that returns if a word is a palindrome.

This function must not be case sensitive.

If the word is null or empty, return true.

Example:
* "rotor" -> true
* "tacos" -> false
* "Kayak" -> true
* null -> true

Add you own tests.

*/

// TODO add your code here

function isPalindrome(word) {
    if (word === null || word === "") {
        return true;
    }

    const variable = word.toLowerCase();
    const reversed = variable.split("").reverse().join("");
    if (variable === reversed) {
        return true;
    } return false

}

module.exports = isPalindrome;
