const arr = [1, 2, 3];
const newArr = [];
Object.assign(newArr, arr);
console.log("Before-arr", arr);
console.log("After-arr", newArr);
arr[0] = 8;
console.log("After-arr", arr);
console.log("After-arr", newArr);
//not affect in new array
