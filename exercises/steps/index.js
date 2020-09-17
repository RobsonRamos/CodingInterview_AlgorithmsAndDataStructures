// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'
 

function steps(n, row = 0, stair = '') {
    if (n === row) {
      return;
    }
  
    if (n === stair.length) {
      console.log(stair);
        steps(n, row + 1);
    }
    else{
      const add = stair.length <= row ? '#' : ' ';
      steps(n, row, stair + add);
    }
  }

/* function steps(n) {
    let count = 0;

    while(count < n){
        let result = '';
        for (let index = 0; index < n; index++) {
            if(index <= count){
                result += '#';
            }
            else{
                result += ' ';
            }
        }
        console.log(result);
        count++;
    }
} */

module.exports = steps;
