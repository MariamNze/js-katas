/*
Create a function `min` which founds the minimum value of a number array.

If the array is empty or null, return null.

Example:
* [1, 2, 3] -> 1
* [3, -2, 1] -> -2
* [] -> null

You can't use the function Math.min()

*/

// TODO add your code here

function min(number) {
    if (!number || number.length === 0) {
      return null;
    }
  
    let minValue = number[0];
  
    for (let i = 1; i < number.length; i++) {
      if (number[i] < minValue) {
        minValue = number[i];
      }
    } return minValue;
  }
  
module.exports = min;
