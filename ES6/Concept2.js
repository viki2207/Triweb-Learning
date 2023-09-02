//Destructuring
//array matching
let arr = [1, 2, 3, 4];
let [a, b] = arr;
console.log("First element a:" + a);
console.log("Second element b:" + b);
[b, a] = [a, b];
console.log("arr is " + arr);
console.log("First element a:" + a);
console.log("Second element b:" + b);
//short hand matching
