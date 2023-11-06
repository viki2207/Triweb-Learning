const arr = [1, 2, 3];
const newArr = Array.from(arr);
console.log("Before - arr", arr);
console.log("Before - arr", newArr);
arr[0] = 8;
console.log("After - arr", arr);
console.log("Before - arr", newArr);
//slice method works the same as spread operator
//it creates a shallow copy of one level
