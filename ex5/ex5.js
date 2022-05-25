// Ex.5 Implementation filter-find-slice-splice-some

//**filter
 
// function filter(arr, filterCallback) {
//   if (
//     !Array.isArray(arr) ||!arr.length 
//     ||typeof filterCallback !== "function"
//   ) {
//     return [];
//   } else {
//     let result = [];

//     for (let i = 0, len = arr.length; i < len; i++) {
//       if (filterCallback(arr[i], i, arr)) {
//         result.push(arr[i]);
//       }
//     }

//     return result;
//   }
// }
// console.log(filter( ));
// //**slice
// const numbers = [1, 2, 3];
// alert(numbers[numbers.length - 1]);

// const numbers = [1, 2, 3];
// alert(numbers.slice(-1)[0]);

//**find
function find(array, callback) {
    const index = findIndex(array, callback);

    if (index === -1) {
      return undefined;
    }

    return array[index];
   }
   console.log(find([1, 2, 3],));

//some
  //  function some(array, callback) {
  //   const { length } = array;

  //   for (let index = 0; index < length; index += 1) {
  //     const value = array[index];

  //     if (callback(value, index, array)) {
  //       return true;
  //     }
  //   }

  //   return false;
  //  }
  //  console.log(some(1, 2, 56,19));
