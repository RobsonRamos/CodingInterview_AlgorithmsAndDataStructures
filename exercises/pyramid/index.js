// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### ' 
//       '#####'


//       '   #   '
//       '  ###  ' linha 2 => 4
//       ' ##### ' linha 3 => posicao 2 => n =
//       '#######'

//       '    #    ' 
//       '   ###   '
//       '  #####  '
//       '#########'

function pyramid(n) {
    
    var totalLines = (n * 2) - 1;
    var midPoint = Math.floor( (totalLines) / 2);
     

    for (let index = 0; index < n; index++) {
        
        var result = '';


        for (let j = 0; j < totalLines; j++) { 
          if((midPoint - index) <= j && (midPoint + index) >= j ){
            result += '#'
          }
          else{
            result += ' ';
          }
        }
        console.log(result);    
    }
}

module.exports = pyramid;
