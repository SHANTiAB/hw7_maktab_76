// Ex. 3 The .length property on an array will return the number of 
// elements in the array.
//  For example, the array below contains 2 elements:

function getLength(arr) {
  return arr.reduce(function fn(acc, item) {
    // console.log(acc);
    if (Array.isArray(item)) return item.reduce(fn);
    return acc + 1;
  }, 0);
}
console.log(getLength([1, [2, 3]]));
console.log(getLength([1, [2, [3, 4]]]));
console.log(getLength([1, [2, [3, [4, [5, 6]]]]]));
