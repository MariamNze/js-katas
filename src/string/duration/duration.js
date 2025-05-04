/*
Create a function `convertTime` which converts a time formatted as "hh:mm" in a duration in minuts.

If the argument is not correctly formatted, return null.

* "02:30" -> 150
* "01:45" -> 105
* "01h45m" -> null

Add you own tests.

*/

// TODO add your code here

  /* Check if the string matches the format "hh:mm" using regex
        ^(\d{2}):(\d{2})$ means:
            ^ start of string
            \d{2} exactly 2 digits (hours)
            : the colon separator
            \d{2} exactly 2 digits (minutes)
            $ end of string
            exec() tries to match the pattern t str
  */
function convertTime(str) {
    const match = /^(\d{2}):(\d{2})$/.exec(str);
    if (!match) {
        return null;
    }
    
    const hours = parseInt(match[1]);
    const minutes = parseInt(match[2]);
    
    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
        return null;
    } return hours * 60 + minutes;
}

module.exports = convertTime;
