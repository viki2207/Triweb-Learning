//shallow copy  refers to a fact that only one lvel is copied
//it will work fine for an array or object containing primitive values..
//spread operator
const arr = [1, 2, 3];
const newArr = [arr];
console.log("Before-arr", arr);
console.log("Before-arr", newArr);

arr[0] = 8;
console.log("After-arr", arr);
console.log("After-newArr", newArr);
