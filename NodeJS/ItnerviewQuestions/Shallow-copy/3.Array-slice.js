const obj = { a: 1, b: 2, c: 3 };
const newArr = arr.slice();
console.log("Before - obj", obj);
console.log("Before - obj", newObj);
obj["a"] = 8;
console.log("After - obj", obj);
console.log("Before - obj", newObj);
//slice method works the same as spread operator
//it creates a shallow copy of one level
