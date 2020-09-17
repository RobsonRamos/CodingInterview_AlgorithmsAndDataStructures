// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


/*
function chunk(array, size) {
    let result = [];

    for (let index = 0; index < array.length; index+=size) {

        let items = [];
        
        for (let j = 0; j < size && (index + j) < array.length; j++) {
            items.push(array[index + j]);
        }
      result.push(items);
    }
    return result;
}*/


function chunk(array, size) {
    let result = [];
    let index = 0;

    while(index < array.length){
        var items = array.slice(index, index + size);
        console.log(items);
        index +=  items.length;
        console.log(index);
        result.push(items);
    }

    return result;
}


module.exports = chunk;
