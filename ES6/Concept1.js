//ARROW function
//not include this, not include argument variable  , not include new target
const xyz = () => {
  console.log("xyz", this);
};
xyz();
// map function with arrow
let array = [1, 2, 3, 4];
const arrmap = array.map((element) => element * 2);
console.log(arrmap);

const restObj = (uname, age) => ({ uname: uname, age: age });

console.log(restObj("Alex", 30));

const addTwoNumber2 = (num1, num2) => num1 + num2;

let arr1 = [1, 2, 3, 4];
arr1.forEach((element) => {
  console.log(element, " ");
});
//default parameter

function addTwoNumber(Num1, Num2 = 0) {
  return Num1 + Num2;
}
let Sum2 = addTwoNumber(2, 3);
console.log(Sum2);

//rest parameter
function RestAddNumber(...Numbers) {
  let sum = 0;
  Numbers.forEach((e) => {
    sum = sum + e;
  });
  console.log(Numbers);
  return sum;
}
let res = RestAddNumber(1, 2, 3);
console.log(res);
let res2 = RestAddNumber(2, 3);
console.log(res2);

//spread operator
let arr3 = [1, 2, 3, 4, 5, 6, 7];
let arr4 = [11, 23];
let combined_arr = [...arr3, ...arr4];
console.log(combined_arr);
console.log(...combined_arr);
//spreadoperator with object
let objStudent = { name: "Amir", age: 18 };
let objStudent2 = { ...objStudent, city: "Jalandhar" };
console.log("objStudent:", objStudent);
console.log("objStudent2:", objStudent2);
objStudent2.name = "Ajit";
console.log("After Updating objStudent1:", objStudent);
console.log("Before Updating objStudent:", objStudent2);

//template literals
function PrintData(Sname, Sage) {
  let toPrint = `Student name is ${Sname}  and age is ${Sage}`;
  console.log(toPrint);
}
let Sname = "v";
let Sage = 30;
PrintData(Sname, Sage);
//rawstring
console.log(String.raw`age is \n ${40}` == "age is \\n 40");

//extended literalsfor binary and octal
console.log(0b111111110111 === 503);
console.log(0o767 === 503);
//Property shorthand
let name = "Azhar";
let age = 40;

let Student = { name, age };
console.log(Student);

//Computed property
let key = "new_key";
function ret() {
  return "Somewherevalues";
}

let obj = {
  sname: "azhar",
  [key + 2]: "Yes",
};
console.log(obj);
