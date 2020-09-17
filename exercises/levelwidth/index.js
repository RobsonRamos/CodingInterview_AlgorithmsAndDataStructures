// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(element, level = 0, result = []) { 

    console.log(result); 
    if(! element.children){
        return ;
    }
    else{ 
          result[level] = result[level] === undefined ? 1 :  result[level] + 1; 
          element.children.forEach(child => levelWidth(child, level + 1, result));
    }
    return result;
}

module.exports = levelWidth;
