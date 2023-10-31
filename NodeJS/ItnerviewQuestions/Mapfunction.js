//array map
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let arr2 = [];
for (let i = 0; i < arr.length; i++) {
  arr2.push(arr[i] * 2);
}
console.log(arr2);
//using map
//any opertation on each element of array
//and return same size of array
console.log("using map");
let newarr = arr.map((element) => element * 2);
console.log(newarr);
//create every array element
//thismethod is provided function once for each element in array
//map doesnot execute the function for array elements without values
