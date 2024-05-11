/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function(arr, depth) {
    const result = [];
    for(let i=0; i<arr.length; i++){
    if(Array.isArray(arr[i]) && depth > 0){
        result.push(...flat(arr[i], depth-1))
    }
    else{
         result.push(arr[i])
    }
  }
  return result;
};

