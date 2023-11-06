const _ = require("lodash");
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const newArr = _.cloneDeep(arr);
console.log("Before-arr", arr);
console.log("Before-arr", newArr);

arr[0][0] = 8;
console.log("After-arr", arr);
console.log("After-newArr", newArr);
