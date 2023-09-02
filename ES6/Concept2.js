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
//short hand matching , object matching
function getStudent() {
  let student = {
    sname: "Azhar",
    age: "31",
    level: "MCA",
  };
  return student;
}
var { sname, age } = getStudent();
console.log(sname, age);

//deep object matching object inside object
function getdata() {
  let obj = {
    ename: "A",
    salary: 10000,
    location: {
      city: "Canberra",
    },
  };
  return obj;
}
let {
  ename: ename,
  salary: salary,
  location: { city: empcity }, //deep object matching object inside object
} = getdata();
console.log("Ename:", ename, "Salary:", salary, ",Location", empcity);

//parameter context matching
function printDatatype1([name, age]) {
  console.log("Name is", name);
  console.log("Age is", age);
}
printDatatype1(["v", 24]);

function printDatatype3({ name: ename, age: eage }) {
  console.log("Name is", ename);
  console.log("Age is", eage);
}
printDatatype3({ name: "v", age: 25 });
//fail soft destructuring
let arr3 = [1, 2];
let [a1 = 2, b1 = 10, c1 = 2, d1] = arr3;
console.log(a1, b1, c1, d1);
//for/ of loop directly iterate the elements of the array
let arr4 = [1, 2, 3, 4, 5];
for (num of arr) {
  console.log(num);
}
//for of loop with string
let str = "MiKI";
for (let c of str) {
  console.log(c);
}
