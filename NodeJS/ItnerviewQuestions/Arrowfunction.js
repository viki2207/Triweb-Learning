//arrow function is a easiest way to use in a shorthand type
//arrow function call as well in different types of arrow functions
//shortcut of the function
const uname = "viki";
const addTwoNumber = (num1, num2) => {
  return num1 + num2;
};
const addHiToName = (uname) => {
  return " Hi" + uname;
};
const addHelloToName = (uname) => "Hello" + uname;
const result = addTwoNumber(2, 3);
console.log(result);
const hiname = addHelloToName(uname);
console.log(hiname);

const isthis = (uname) => {
  console.log(this);
};
console.log(this);
isthis();
