// Ex.4 Create a function that takes an array of strings and 
// returns an array with only the strings
// that have numbers in them. If there are no strings containing
//  numbers, return an empty array.

const numInStr = (arr) => {
  let a = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      // console.log(arr[i] );
      if (arr[i][j] == parseInt(arr[i][j])) {
        a.push(arr[i]);
        break;
      }
    }
  }
  return a;
};

console.log(numInStr(["1a", "a", "2b", "b"]));
console.log(numInStr(["abc", "abc10"]));
console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"]));
console.log(numInStr(["this is a test", "test"]));
