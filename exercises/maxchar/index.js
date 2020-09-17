// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    
    let obj = {};
    let counter = 0;
    let winnerChar = '';

     str.toString()
        .split('')
        .forEach(c => {
            obj[c] ? obj[c]++ : obj[c] = 1;
            if(obj[c] > counter){
                counter = obj[c];
                winnerChar = c;
            }
        });
    return winnerChar;
}

module.exports = maxChar;
